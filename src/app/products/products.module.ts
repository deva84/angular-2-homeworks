import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [FirstComponent, ProductComponent, ProductListComponent, ProductViewComponent],
  imports: [SharedModule, ProductsRoutingModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
