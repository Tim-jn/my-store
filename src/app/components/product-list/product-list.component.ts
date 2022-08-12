import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

export type productProps = {
  id: number;
  name: string;
  price: number;
  url: string;
  description: string;
};
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: productProps[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
