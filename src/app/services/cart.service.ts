import { Injectable } from '@angular/core';
import { productProps } from '../components/product-list/product-list.component';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: productProps[] = [];

  constructor() {}

  addToCart(product: productProps, quantity: number) {
    for (let i = 0; i < quantity; i++) {
      this.products.push(product);
    }
    console.log(quantity);
  }

  getItems() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }
}
