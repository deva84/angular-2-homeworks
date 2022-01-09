import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from '../../models/products.models';

@Component({
  selector: 'app-first',
  template: `
    <div class="product">
      <span class="title">{{ name }}</span>
      <div class="description">{{ description }}</div>
      <span class="price">{{ price }} $</span>
      <span *ngIf="isAvailable; else notAvailable" class="availability">Available</span>
      <ng-template #notAvailable>
        <span class="out-of-stock">Out of stock</span>
      </ng-template>
      <div class="category-wrapper">
        <i class="fas fa-tags"></i>
        <span class="category">{{ category }}</span>
      </div>
      <div class="hover-layer" appHighlight>
        <button
          (click)="onAddToCart()"
          [disabled]="!isAvailable"
          [class.btn-disabled]="!isAvailable"
          class="add-to-cart"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./first.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent {
  public name = 'Milk';
  public description = '3% fat';
  public price = 1.2;
  public category = Category.DAIRY;
  public isAvailable = false;

  onAddToCart(): void {
    console.log(`${this.name} has been added to your cart!`);
  }
}
