import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Category, IProductModel } from '../../products/models/products.models';

@Injectable({
  providedIn: 'any',
})
export class ProductResolveGuard implements Resolve<IProductModel> {
  // implementation of this method will be provided later
  resolve(route: ActivatedRouteSnapshot): Observable<IProductModel> {
    return of({
      id: 1,
      name: 'Wheat Cookies',
      description: 'Original Chocolate Chip Cookies, Family Size, 400g',
      price: 2,
      category: Category.BREAD,
      isAvailable: true,
      img_large: 'assets/images/products/large/cookies.jpg',
      img_medium: 'assets/images/products/medium/cookies.jpg',
      img_small: 'assets/images/products/small/cookies.jpg',
      img_xsmall: 'assets/images/products/x_small/cookies.jpg',
    });
  }
}
