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

  @Output() itemPageOpened = new EventEmitter<IProductModel>();

  onOpenProductPage(): void {
    this.itemPageOpened.emit(this.product);
  }
}
