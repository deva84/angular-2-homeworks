import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProductModel } from '../../models/products.models';
import { CartService } from '../../../cart/services/cart.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products$!: Observable<IProductModel[]>;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
  }

  onOpenProductPage(item: IProductModel): void {
    const link = ['/product', item.id];
    this.router.navigate(link);
  }
}
