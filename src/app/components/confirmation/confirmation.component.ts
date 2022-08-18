import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  name!: string;
  value!: number;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.name = this.cartService.name;
    this.value = this.cartService.value;
    this.cartService.clearCart();
  }
}
