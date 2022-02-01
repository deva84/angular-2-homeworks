import { Component, DoCheck, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../models/cart.models';
import { Order } from '../../../shared/pipes/order-by.pipe';

export type SortProperty = 'price' | 'quantity' | 'name';

export interface ISortOption {
  properties: SortProperty[];
  order?: Order;
}

export type ISortOptions = Record<string, ISortOption>;

// не совсем понятно для чего мне эти проперти
export const sortOptions: ISortOptions = {
  a: { properties: ['price', 'quantity', 'name'], order: 'ASC' },
  b: { properties: ['quantity', 'price', 'name'], order: 'ASC' },
  c: { properties: ['quantity', 'name', 'price'], order: 'ASC' },
  d: { properties: ['price', 'name', 'quantity'], order: 'ASC' },
  e: { properties: ['name', 'price', 'quantity'], order: 'ASC' },
  f: { properties: ['name', 'quantity', 'price'], order: 'ASC' },
  g: { properties: ['price', 'quantity'], order: 'ASC' },
  h: { properties: ['quantity', 'price'], order: 'ASC' },
  i: { properties: ['quantity', 'name'], order: 'ASC' },
  j: { properties: ['name', 'quantity'], order: 'ASC' },
  k: { properties: ['price', 'name'], order: 'ASC' },
  l: { properties: ['name', 'price'], order: 'ASC' },
  m: { properties: ['price'], order: 'ASC' },
  n: { properties: ['quantity'], order: 'ASC' },
  o: { properties: ['name'], order: 'ASC' },
  p: { properties: ['price', 'quantity', 'name'] },
  r: { properties: ['quantity', 'price', 'name'] },
  s: { properties: ['quantity', 'name', 'price'] },
  t: { properties: ['price', 'name', 'quantity'] },
  u: { properties: ['name', 'price', 'quantity'] },
  v: { properties: ['name', 'quantity', 'price'] },
  w: { properties: ['price', 'quantity'] },
  x: { properties: ['quantity', 'price'] },
  y: { properties: ['quantity', 'name'] },
  z: { properties: ['name', 'quantity'] },
  aa: { properties: ['price', 'name'] },
  ab: { properties: ['name', 'price'] },
  ac: { properties: ['price'] },
  ad: { properties: ['quantity'] },
  ae: { properties: ['name'] },
};

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less'],
})
export class CartListComponent implements OnInit, DoCheck {
  @ViewChild('checkboxes') checkboxesEl!: ElementRef<HTMLElement>;
  @ViewChild('sortBy') sortByInputEl!: ElementRef<HTMLElement>;

  cartItems: ICartItem[] = [];
  totalAmount = 0;
  numberOfItems = 0;
  isEmptyCart = true;
  sortCheckboxes = ['price', 'quantity', 'name'];
  orderOptions: Order[] = ['ASC', 'DESC'];
  currentOrder: Order = 'DESC';
  sortProperties: SortProperty[] | undefined;

  private dropdownOpened = false;
  private sortOptionsSelected: SortProperty[] = [];

  constructor(private cartService: CartService, private renderer2: Renderer2) {
    this.renderer2.listen('window', 'click', (e: Event) => {
      if (
        this.checkboxesEl &&
        !this.checkboxesEl.nativeElement.contains(e.target as Node) &&
        !this.sortByInputEl.nativeElement.contains(e.target as Node)
      ) {
        this.closeMenu();
      }
    });
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getProducts();
  }

  ngDoCheck(): void {
    this.cartItems = this.cartService.getProducts();
    this.totalAmount = this.cartService.getTotalCartAmount();
    this.numberOfItems = this.cartService.getNumberOfItems();
    this.isEmptyCart = this.cartService.isCartEmpty();
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

  onOpenMenu(): void {
    if (!this.dropdownOpened) {
      this.checkboxesEl.nativeElement.style.display = 'block';
      this.dropdownOpened = true;
    }
  }

  private closeMenu(): void {
    this.checkboxesEl.nativeElement.style.display = 'none';
    this.dropdownOpened = false;
  }

  onSortOptionSelect(e: Event): void {
    const element = e.target as HTMLInputElement;
    const selectedProperty = element.id as SortProperty;
    if (this.sortOptionsSelected.indexOf(selectedProperty) < 0) {
      this.sortOptionsSelected = [...this.sortOptionsSelected, selectedProperty];
    } else {
      this.sortOptionsSelected = this.sortOptionsSelected.filter(
        (option) => option !== selectedProperty
      );
    }
  }

  onToggleOrder(e: Event): void {
    const element = e.target as HTMLInputElement;
    this.currentOrder = (element as HTMLInputElement).value as Order;
  }

  onRemoveAllProducts(): void {
    this.cartService.removeAllProducts();
    this.updateSortOptions();
  }

  onSubmitSort(): void {
    this.sortProperties = this.sortOptionsSelected;
  }

  private updateSortOptions(): void {
    this.sortOptionsSelected = [];
    this.sortProperties = undefined;
    this.currentOrder = 'DESC';
  }
}
