import { Injectable } from '@angular/core';
import { ICartItemData } from '../models/cart.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: ICartItemData[] = [];
  totalAmount = 0;
  numberOfItems = 0;

  getCartItems(): ICartItemData[] {
    return this.cartList;
  }

  addItemToCartList(id: number, name: string, price: number): void {
    const itemToAdd = this.cartList.find((item) => item.id === id);

    if (!itemToAdd) {
      this.cartList = [
        ...this.cartList,
        { id: id, name: name, quantity: 1, price: price, amount: price },
      ];
    } else {
      this.cartList = this.cartList.map((item) => {
        const itemCopy = { ...item };
        if (itemCopy.id !== id) {
          return itemCopy;
        } else {
          const itemQuantity = itemToAdd.quantity + 1;
          const itemAmount = this.getItemAmount(itemQuantity, price);
          return { ...itemToAdd, quantity: itemQuantity, amount: itemAmount };
        }
      });
    }

    this.calculateCartAmount();
    this.calculateNumberOfItems();
  }

  getItemAmount(quantity: number, price: number): number {
    return Number((quantity * price).toFixed(2));
  }

  private calculateCartAmount(): void {
    this.totalAmount = Number(
      this.cartList
        .map((item) => item.amount)
        .reduce((a, b) => a + b, 0)
        .toFixed(2)
    );
  }

  private calculateNumberOfItems(): void {
    this.numberOfItems = this.cartList.map((item) => item.quantity).reduce((a, b) => a + b, 0);
  }

  getTotalCartAmount(): number {
    return this.totalAmount;
  }

  getNumberOfItems(): number {
    return this.numberOfItems;
  }

  increaseItemQuantity(id: number): void {
    this.cartList = this.cartList.map((item) => {
      let itemCopy = item;

      if (itemCopy.id === id) {
        itemCopy.quantity += 1;
        itemCopy.amount = this.getItemAmount(itemCopy.quantity, itemCopy.price);
      }
      return itemCopy;
    });

    this.calculateCartAmount();
    this.calculateNumberOfItems();
  }

  decreaseItemQuantity(id: number): void {
    this.cartList = this.cartList.map((item) => {
      let itemCopy = item;

      if (itemCopy.id === id) {
        if (itemCopy.quantity > 1) {
          itemCopy.quantity -= 1;
          itemCopy.amount = this.getItemAmount(itemCopy.quantity, itemCopy.price);
        }
      }
      return itemCopy;
    });

    this.calculateCartAmount();
    this.calculateNumberOfItems();
  }

  deleteItemFromCartList(id: number): void {
    this.cartList.splice(
      this.cartList.findIndex((item) => item.id === id),
      1
    );

    this.calculateCartAmount();
    this.calculateNumberOfItems();
  }
}
