import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

export type products = {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
  quantity?: number;
};
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  @Output() products: products[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
