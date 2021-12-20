import {Component, Input} from '@angular/core';
import {Category} from "../app.models";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent {
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() price: number | undefined;
  @Input() category: Category | undefined;
  @Input() isAvailable: boolean = true;

  constructor(private cartService: CartService) {}

  onAddToCart(): void {
    this.cartService.addItemToCartList(this.name!, this.price!)
    console.log(`${this.name} has been added to your cart!`);
  }

}
