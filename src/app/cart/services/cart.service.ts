import { Injectable } from '@angular/core';
import { ICartItemData } from '../models/cart.models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: ICartItemData[] = [];
  private totalSum = 0;
  private totalQuantity = 0;
  private isEmptyCart = true;

  getProducts(): ICartItemData[] {
    return this.cartProducts;
  }

  addProduct(id: number, name: string, price: number, quantity = 1): void {
    const itemToAdd = this.cartProducts.find((item) => item.id === id);

    if (!itemToAdd) {
      this.cartProducts = [
        ...this.cartProducts,
        { id: id, name: name, quantity: quantity, price: price, amount: price },
      ];
    } else {
      this.cartProducts = this.cartProducts.map((item) => {
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
    this.updateCartData();
  }

  getItemAmount(quantity: number, price: number): number {
    return quantity * price;
  }

  private updateCartData(): void {
    this.totalSum = this.cartProducts.map((item) => item.amount).reduce((a, b) => a + b, 0);
    this.totalQuantity = this.cartProducts.map((item) => item.quantity).reduce((a, b) => a + b, 0);
    this.isEmptyCart = this.totalQuantity <= 0;
  }

  getTotalCartAmount(): number {
    return this.totalSum;
  }

  getNumberOfItems(): number {
    return this.totalQuantity;
  }

  increaseQuantity(id: number): void {
    this.cartProducts = this.cartProducts.map((item) => {
      let itemCopy = item;

      if (itemCopy.id === id) {
        itemCopy = this.changeQuantity(itemCopy, 1);
      }
      return itemCopy;
    });
    this.updateCartData();
  }

  decreaseQuantity(id: number): void {
    this.cartProducts = this.cartProducts.map((item) => {
      let itemCopy = item;

      if (itemCopy.id === id) {
        if (itemCopy.quantity > 1) {
          itemCopy = this.changeQuantity(itemCopy, -1);
        }
      }
      return itemCopy;
    });
    this.updateCartData();
  }

  private changeQuantity(item: ICartItemData, quantityDelta: number): ICartItemData {
    const itemCopy = { ...item };
    itemCopy.quantity += quantityDelta;
    itemCopy.amount = this.getItemAmount(itemCopy.quantity, itemCopy.price);
    return itemCopy;
  }

  removeProduct(id: number): void {
    this.cartProducts = this.cartProducts.filter((item) => item.id !== id);
    this.updateCartData();
  }

  removeAllProducts(): void {
    this.cartProducts = [];
    this.updateCartData();
  }

  isCartEmpty(): boolean {
    return this.isEmptyCart;
  }
}
