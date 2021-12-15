import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {IProductModel} from "../app.models";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  public products: IProductModel[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
