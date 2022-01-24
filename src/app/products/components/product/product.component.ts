import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, IProductModel } from '../../models/products.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  @Input() product!: IProductModel;

  @Output() itemAddedToCart = new EventEmitter<Partial<IProductModel>>();

  onAddToCart(): void {
    this.itemAddedToCart.emit({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
    });
    console.log(`${this.product.name} has been added to your cart!`);
  }
}
