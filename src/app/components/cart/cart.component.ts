import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { cart } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: cart[] = [];
  total: number = 0;
  value!: number;

  name!: string;
  address!: string;
  card!: number;

  isNumber!: boolean;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cart = this.cartService.getProducts();

    this.total = this.cartService.value;
    this.value = this.cartService.value;
  }

  handleUpdateQuantity() {
    this.cartService.updateQuantity();
    this.total = this.cartService.value;
  }

  handleSubmit() {
    this.cartService.name = this.name;
    this.router.navigate(['/confirmation']);
  }

  handleRemove(product: any) {
    this.cart.splice(this.cart.indexOf(product), 1);

    this.cartService.updateQuantity();
    this.total = this.cartService.value;
  }

  ngOnChanges(input: number): void {
    if (isNaN(input)) {
      this.isNumber = false;
    } else {
      this.isNumber = true;
    }
  }
}
