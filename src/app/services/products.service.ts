import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl
  }


  getProducts(): Promise<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`).toPromise();
  }

  getProductDetails(productId: number): Promise<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${productId}`).toPromise();
  }

  createProduct(newProduct: Product): Promise<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, newProduct).toPromise();
  }

  editProduct(product: Product) {
    return this.http.put(`${this.baseUrl}/products/${product.id}`, product).toPromise();
  }

  deleteProduct(productId: number) {
    return this.http.delete(`${this.baseUrl}/products/${productId}`).toPromise();
  }
}


export interface Product {
  imageUrl: string;
  name: string;
  avatar: string;
  count: number;
  size: ProductSize;
  weight: string;
  comments: Array<Comment>;
  id: number | null;
}

interface ProductSize {
  width: string;
  height: string;
}



export interface Comment {
  id: number;
  productId: number;
  userId: number,
  description: string;
  date: string;
}