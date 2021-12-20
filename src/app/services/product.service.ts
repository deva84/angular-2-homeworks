import { Injectable } from '@angular/core';
import {IProductModel} from '../app.models';
import * as productsListData from './../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): IProductModel[] {
    const data = productsListData;
    return data.items as IProductModel[]
  }
}
