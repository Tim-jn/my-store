import { Injectable } from '@angular/core';
import { products } from '../components/product-list/product-list.component';

export type cart = {
  product: products;
  quantity: number;
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: cart[] = [];
  value: number = 0;
  name!: string;

  constructor() {}

  addToCart(product: products, quantity: number) {
    let index = this.cart.findIndex((cartItem) => {
      return cartItem.product.id === product.id;
    });
    if (index >= 0) {
      this.cart[index].quantity += Number(quantity);
    } else {
      this.cart.push({
        product,
        quantity: Number(quantity),
      });
    }
    this.updateQuantity();
  }

  updateQuantity() {
    let value = 0;

    for (let cartItem of this.cart) {
      value += cartItem.product.price * cartItem.quantity;
      if (cartItem.quantity === 0) {
        alert(
          `If the amount is set to 0, the "${cartItem.product.name}" item will be removed from your cart !`
        );
      }
    }

    this.value = Math.round(value * 100) / 100;
  }

  getProducts() {
    this.cart = this.cart.filter((cartItem) => {
      return cartItem.quantity > 0;
    });
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
