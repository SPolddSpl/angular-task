import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ProductCreateComponent } from './product-create/product-create.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild(ProductCreateComponent) productCreate: ProductCreateComponent;

  products: Array<Product> = [];
  unSortedProducts: Array<Product> = [];
  hGutter = 24;
  vGutter = 24;
  count = 4;
  isVisible: boolean = false;


  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  async getProducts(): Promise<void> {
    this.unSortedProducts = await this.productService.getProducts();
    this.products = this.unSortedProducts;
  }
  handleCancel() {
    console.log('Cancel')
    this.isVisible = !this.isVisible;
  }
  handleOkay() {
    console.log('OKay')
    this.productCreate.submitForm();
  }

  onProductsSort(sortedProducts: Product[]) {
    this.products = [...sortedProducts];
  }

  cancelSort() {
    this.products = this.unSortedProducts;
  }

  openModal(flag: boolean) {
    this.isVisible = flag;
  }



  async isAdded(ev: boolean): Promise<void> {
    if (ev) {
      this.isVisible = !this.isVisible;
      await this.fetchProducts();
    }
  }

  async fetchProducts() {
    await this.getProducts();
  }
}
