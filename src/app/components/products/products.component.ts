import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ProductCreateComponent } from './product-create/product-create.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
//Main Products Component
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

  //Fetching data here
  async getProducts(): Promise<void> {
    this.unSortedProducts = await this.productService.getProducts();
    this.products = this.unSortedProducts;
  }


  //Handle cancel btn in Create Product Modal
  handleCancel() {
    this.isVisible = !this.isVisible;
  }

  //Handle ok btn in Create Product Modal
  handleOkay() {
    this.productCreate.submitForm();
  }

  //Event Handler from Child Comp -> Product Sort bar
  onProductsSort(sortedProducts: Product[]) {
    this.products = [...sortedProducts];
  }

  //Cancel sort btn function
  cancelSort() {
    this.products = this.unSortedProducts;
  }

  //Open create  Product Modal
  openCreateModal(flag: boolean) {
    this.isVisible = flag;
  }



  //Handler if new Product Added
  async isAdded(ev: boolean): Promise<void> {
    if (ev) {
      this.isVisible = !this.isVisible;
      await this.getProducts();
    }
  }
}
