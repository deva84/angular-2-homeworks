import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../models/cart.models';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less'],
})
export class CartListComponent implements OnInit, DoCheck {
  cartItems: ICartItem[] = [];
  totalAmount = 0;
  numberOfItems = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts();
  }

  ngDoCheck(): void {
    this.cartItems = this.cartService.getProducts();
    this.totalAmount = this.cartService.getTotalCartAmount();
    this.numberOfItems = this.cartService.getNumberOfItems();
  }

  trackByItems(index: number, item: ICartItem): number {
    return item.id;
  }

  onIncreaseQuantity(id: number): void {
    this.cartService.increaseQuantity(id);
  }

  onDecreaseQuantity(id: number): void {
    this.cartService.decreaseQuantity(id);
  }

  onRemoveProduct(id: number): void {
    this.cartService.removeProduct(id);
  }

  onProcessOrder(): void {
    console.log(
      "Order is being processed! You'll be directed to a new page to complete your order."
    );
  }
}
