import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/product-list.component';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product!: products;
  id!: number;
  selectQuantity: number = 1;
  productAdded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = parseInt(params['id']);
    });

    this.productService.getProducts().subscribe((data) => {
      this.product = data.filter(
        (product: products) => product.id === this.id
      )[0];
    });
  }

  handleAddToCart() {
    this.cartService.addToCart(this.product, this.selectQuantity);
    this.productAdded = true;
    setTimeout(() => {
      this.productAdded = false;
    }, 1500);
  }
}
