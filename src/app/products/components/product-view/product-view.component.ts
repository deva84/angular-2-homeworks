import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProductModel } from '../../models/products.models';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.less'],
})
export class ProductViewComponent implements OnInit {
  @Output() itemAddedToCart = new EventEmitter<Partial<IProductModel>>();

  product!: IProductModel;

  constructor(
    private productsService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const observer = {
      next: (product: IProductModel) => {
        this.product = { ...product };
      },
      error: (err: any) => console.log(err),
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          if (Number(params.get('productID')) === 0) {
            return this.route.data as Observable<IProductModel>;
          } else {
            return this.productsService.getProduct(Number(params.get('productID'))!);
          }
        }),
        map((el) => (el ? el : ({} as IProductModel)))
      )
      .subscribe(observer);
  }

  onGoToCart(): void {
    void this.router.navigate(['/cart']);
  }

  onAddToCart(): void {
    this.cartService.addProduct(
      this.product.id,
      this.product.name,
      this.product.price,
      this.product.img_xsmall
    );
    this.onGoToCart();
  }
}
