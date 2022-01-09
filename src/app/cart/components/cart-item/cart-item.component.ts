import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() quantity!: number;
  @Input() amount!: number;

  @Output() itemQuantityIncreased = new EventEmitter<number>();
  @Output() itemQuantityDecreased = new EventEmitter<number>();
  @Output() itemDeleted = new EventEmitter<number>();

  onSubtractItem(): void {
    this.itemQuantityDecreased.emit(this.id);
  }

  onAddItem(): void {
    this.itemQuantityIncreased.emit(this.id);
  }

  onDeleteItem(): void {
    this.itemDeleted.emit(this.id);
  }
}
