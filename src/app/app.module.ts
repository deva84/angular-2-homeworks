import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { InformationBlockModule } from './information-block/information-block.module';
import { UsersGeneralModule } from './users-general/users-general.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    InformationBlockModule,
    CartModule,
    ProductsModule,
    SharedModule,
    UsersGeneralModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
