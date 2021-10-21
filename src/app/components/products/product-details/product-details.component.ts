import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

//Product details component, shows additional data of product
export class ProductDetailsComponent implements OnInit {
  product: Product;
  commentInput: string = '';
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    this.getProductDetails();
  }

  //fetch product details
  async getProductDetails() {
    this.product = await this.productService.getProductDetails(this.route.snapshot.params.id);
  }



}
