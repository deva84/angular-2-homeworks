import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FirstComponent, ProductComponent, ProductListComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProductListComponent],
  // нет необходимости, уже зарегистрирован
  // providers: [ProductService],
})
export class ProductsModule {}
