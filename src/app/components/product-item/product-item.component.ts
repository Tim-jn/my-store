import { Component, OnInit, Input } from '@angular/core';
import { productProps } from '../product-list/product-list.component';
import { CartService } from 'src/app/services/cart.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: productProps;
  quantity!: number;
  selectQuantity: number = 1;
  productAdded: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: productProps) {
    this.cartService.addToCart(product, Number(this.selectQuantity));
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 1500);
  }
}
