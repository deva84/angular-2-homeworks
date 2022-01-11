import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, IProductModel } from '../../models/products.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  // Может быть рассмотреть вариант передачи объекта, чтобы уменьшить количество инпутов?
  @Input() id: number | undefined;
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() price: number | undefined;
  @Input() category: Category | undefined;
  @Input() isAvailable = true;

  @Output() itemAddedToCart = new EventEmitter<Partial<IProductModel>>();

  onAddToCart(): void {
    this.itemAddedToCart.emit({ id: this.id, name: this.name!, price: this.price! });
    console.log(`${this.name as string} has been added to your cart!`);
  }
}
