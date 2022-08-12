import { Component, OnInit, Input } from '@angular/core';
import { productProps } from '../product-list/product-list.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product!: productProps;

  constructor() {}

  ngOnInit(): void {}
}
