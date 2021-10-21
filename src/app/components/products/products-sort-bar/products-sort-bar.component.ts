import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-sort-bar',
  templateUrl: './products-sort-bar.component.html',
  styleUrls: ['./products-sort-bar.component.scss']
})
//Product Sort bar comp (not successful name for this comp), because it sorts data, not just showing sort bar
export class ProductsSortBarComponent implements OnInit {
  @Input() products: Product[];
  @Output() productsSort = new EventEmitter<Product[]>();

  @Input() isVisible: boolean;
  @Output() setVisibility = new EventEmitter<boolean>();

  isNameDesc: boolean = false;
  isCountDesc: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  //Sort function, sort type depends on type var
  sortBy(type: string) {
    if (type === 'name') {
      this.isNameDesc = !this.isNameDesc;
      this.products = this.products.sort((a, b) => {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      });
      this.isNameDesc ? this.products = this.products.reverse() : this.products = this.products;
    }
    if (type === 'count') {
      this.isCountDesc = !this.isCountDesc;
      this.products = this.products.sort((a, b) => {
        return this.isCountDesc ? b.count - a.count : a.count - b.count;
      });
    }
    this.productsSort.emit(this.products)
  }

  //Event emmit for parent comp
  toggleModal() {
    this.setVisibility.emit(!this.isVisible);
  }
}
