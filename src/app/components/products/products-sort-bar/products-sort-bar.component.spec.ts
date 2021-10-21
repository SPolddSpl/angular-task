import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSortBarComponent } from './products-sort-bar.component';

describe('ProductsSortBarComponent', () => {
  let component: ProductsSortBarComponent;
  let fixture: ComponentFixture<ProductsSortBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSortBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSortBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
