import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICartItem } from '../../models/cart.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() item!: ICartItem;

  @Output() itemQuantityIncreased = new EventEmitter<number>();
  @Output() itemQuantityDecreased = new EventEmitter<number>();
  @Output() itemDeleted = new EventEmitter<number>();

  onItemQuantityDecrease(): void {
    this.itemQuantityDecreased.emit(this.item.id);
  }

  onItemQuantityIncrease(): void {
    this.itemQuantityIncreased.emit(this.item.id);
  }

  onDeleteItem(): void {
    this.itemDeleted.emit(this.item.id);
  }
}
