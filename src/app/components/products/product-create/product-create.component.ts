import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})

//Product create modal form
export class ProductCreateComponent implements OnInit {
  @Output() productAdded = new EventEmitter<boolean>();
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.formInit();
  }


  //form init 
  formInit(): void {
    this.validateForm = this.fb.group({
      imageUrl: [null, [Validators.required]],
      name: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
      width: [null, [Validators.required]],
      height: [null, [Validators.required]],
      weight: [null, Validators.required],
      count: [null, Validators.required]
    })
  }

  //submit function for form
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    if (this.validateForm.valid) {
      const newProduct: Product = {
        imageUrl: this.validateForm.value.imageUrl,
        name: this.validateForm.value.name,
        size: {
          width: this.validateForm.value.width,
          height: this.validateForm.value.height
        },
        avatar: this.validateForm.value.avatar,
        weight: this.validateForm.value.weight,
        count: this.validateForm.value.count,
        comments: [],
        id: null
      }


      this.createProduct(newProduct);
    }
  }

  //Api call, that creates new product
  async createProduct(newProduct: Product) {
    await this.productService.createProduct(newProduct);
    this.toastService.createToast('success', `Product added`);
    this.productAdded.next(true);
  }
}
