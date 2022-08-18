import { Component, OnInit, Input } from '@angular/core';
import { products } from '../product-list/product-list.component';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: products;
  selectQuantity: number = 1;
  productAdded: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.cartService.addToCart(this.product, this.selectQuantity);
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 1500);
  }
}
