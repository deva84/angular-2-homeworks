import { Component, DoCheck, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../models/cart.models';
import { Order } from '../../../shared/pipes/order-by.pipe';
import { Router } from '@angular/router';

export type SortProperty = 'price' | 'quantity' | 'name';

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
  finalizedAmount = 0;

  private dropdownOpened = false;
  private sortOptionsSelected: SortProperty[] = [];

  constructor(
    private cartService: CartService,
    private renderer2: Renderer2,
    private router: Router
  ) {
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
    this.finalizedAmount = this.cartService.finalizeCartAmount(this.getDeliveryFees());
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
    void this.router.navigate(['/order']);
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

  getDeliveryFees(): number {
    return this.isEmptyCart ? 0 : 5.95;
  }
}
