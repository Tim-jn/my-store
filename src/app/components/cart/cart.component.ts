import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products = this.cartService.getItems();
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products.map((product) => {
      this.total += product.price;
    });
  }
}
