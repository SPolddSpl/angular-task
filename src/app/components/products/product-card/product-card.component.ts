import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})

//Product card components, thats will be shown at dashboard
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() isDeleted = new EventEmitter<boolean>();
  isVisible: boolean = false;
  constructor(private productService: ProductsService, private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  //function thats handles product avatar img fallback and override it
  onAvatarLoadErr() {
    this.product.avatar = 'https://c.tenor.com/X0NSqusKk0UAAAAC/jujutsu-jujutsu-kaisen.gif';
  }


  //show Delete confirm modal
  showConfirm() {
    this.toggleModal();
  }


  //API call that deletes curr product
  async deleteProduct() {
    await this.productService.deleteProduct(this.product.id);
  }



  //Delete modal handle OK button, that executes api call and then show messages bout this call result
  async handleOk() {
    await this.deleteProduct();
    this.toastService.createToast('success', 'Product deleted');
    this.toggleModal()
    this.isDeleted.emit(true);
  }

  //handle cancel btn of Delete Modal 
  handleCancel() {
    this.toggleModal()
  }

  //Toggle visibility of delete Modal 
  toggleModal() {
    this.isVisible = !this.isVisible;
  }
}
