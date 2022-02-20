import { Injectable } from '@angular/core';
import * as productsListData from '../../core/data/products.json';
import { IProductModel } from '../models/products.models';
import { Observable, Subscriber } from 'rxjs';
import { map, retry, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Observable<IProductModel[]> {
    const data = productsListData;
    return new Observable((subscriber: Subscriber<IProductModel[]>) =>
      subscriber.next(data.items as IProductModel[])
    );
  }

  getProduct(id: number): Observable<IProductModel> {
    return this.getProducts().pipe(
      map((products) => {
        return products.find((item) => item.id === id)!;
      })
    );
  }
}
