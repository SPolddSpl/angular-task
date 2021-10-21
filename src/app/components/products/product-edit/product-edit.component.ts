import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  validateForm: FormGroup;
  constructor(private route: ActivatedRoute, private productService: ProductsService,
    private fb: FormBuilder,
    private toastService: ToastService,
    private location: Location) { }

  ngOnInit(): void {
    this.getProduct();

  }

  async getProduct() {
    this.product = await this.productService.getProductDetails(this.route.snapshot.params.id);
    this.validateForm = this.fb.group({
      name: [this.product.name, [Validators.required],],
      avatar: [this.product.avatar, [Validators.required]],
      count: [this.product.count, [Validators.required]],
      weight: [this.product.weight, [Validators.required]],
      width: [this.product.size.width, [Validators.required]],
      height: [this.product.size.height, [Validators.required]],
      imageUrl: [this.product.imageUrl, [Validators.required]]
    });
  }

  async submitForm() {
    if (this.validateForm.valid) {
      const editedProduct: Product = {
        name: this.validateForm.value.name,
        avatar: this.validateForm.value.avatar,
        count: this.validateForm.value.count,
        weight: this.validateForm.value.weight,
        size: {
          width: this.validateForm.value.width,
          height: this.validateForm.value.height
        },
        id: this.product.id,
        imageUrl: this.validateForm.value.imageUrl,
        comments: this.product.comments
      }
      try {
        await this.productService.editProduct(editedProduct);
        this.toastService.createToast('success', 'Product edited');
        this.location.back();
      } catch (error) {
        this.toastService.createToast('error', error);
      }
    }
    else {
      this.toastService.createToast('warning', 'Form is not valid')
    }
  }

}
