import { NgModule } from '@angular/core';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FirstComponent, ProductComponent, ProductListComponent],
  imports: [SharedModule],
  exports: [ProductListComponent],
})
export class ProductsModule {}
