import { Injectable } from '@angular/core';
import {ICartItem} from "../app.models";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartList: ICartItem[] = [];
  public totalAmount: number = 0;

  public getCartItems(): ICartItem[] {
    return this.cartList;
  }

  public addItemToCartList(name: string, price: number): void {
    const itemToAdd = this.cartList.find(item => item.name === name);
    if (!itemToAdd) {
      this.cartList.push({name: name, quantity: 1, amount: price})
    } else {
      const pricePerItem = itemToAdd.amount / itemToAdd.quantity;
      itemToAdd.quantity += 1;
      itemToAdd.amount = Number((pricePerItem * itemToAdd.quantity).toFixed(2));
    }
  }
}
