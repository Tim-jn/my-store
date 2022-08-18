import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { cart } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: cart[] = [];
  total: number = 0;
  cartQuantity!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.cartService.getProducts();
    // this.products.some((product) => {
    //   if (this.products.includes(product)) {
    //     return console.log(true);
    //   }
    //   return console.log(false);
    // });
    // this.quantityProducts = this.products.map((product) => {
    //   return { ...product, quantity: this.selectQuantity };
    // });
    this.cart.map((cartItem) => {
      this.cartQuantity = cartItem.quantity;
      this.total += cartItem.product.price * cartItem.quantity;
    });

    // }
  }

  handleUpdateQuantity() {
    this.cartService.updateQuantity();
    this.total = this.cartService.value;
    console.log(this.cart);
  }
}
