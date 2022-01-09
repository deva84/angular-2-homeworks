import { Injectable } from '@angular/core';
import * as productsListData from '../../core/data/products.json';
import { IProductModel } from '../models/products.models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): IProductModel[] {
    const data = productsListData;
    return data.items as IProductModel[];
  }
}
