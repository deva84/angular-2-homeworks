import { Component, OnInit } from '@angular/core';
import {ICartItem} from "../app.models";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {
  cartItems: ICartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  trackByItems(index: number, item: ICartItem): string {
    return item.name;
  }

}
