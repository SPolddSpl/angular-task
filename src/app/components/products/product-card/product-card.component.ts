import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product, ProductsService } from 'src/app/services/products.service';
import { ToastService } from 'src/app/services/toast.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() isDeleted = new EventEmitter<boolean>();
  isVisible: boolean = false;
  constructor(private productService: ProductsService, private toastService: ToastService) {
  }

  ngOnInit(): void {
  }

  onAvatarLoadErr() {
    this.product.avatar = 'https://c.tenor.com/X0NSqusKk0UAAAAC/jujutsu-jujutsu-kaisen.gif';
  }

  showConfirm() {
    this.toggleModal();
  }

  async deleteProduct() {
    await this.productService.deleteProduct(this.product.id);
  }


  async handleOk() {
    await this.deleteProduct();
    this.toastService.createToast('success', 'Product deleted');
    this.toggleModal()
    this.isDeleted.emit(true);
  }

  handleCancel() {
    this.toggleModal()
    console.log('Heh, okay')
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
  }
}
