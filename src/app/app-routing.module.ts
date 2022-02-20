import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './information-block/components/page-not-found/page-not-found.component';
import { MainPageComponent } from './information-block/components/main-page/main-page.component';
import { DeliveryComponent } from './information-block/components/delivery/delivery.component';
import { ContactsComponent } from './information-block/components/contacts/contacts.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { IsCartEmptyGuard } from './core/guards/is-cart-empty.guard';

const routes: Routes = [
  { path: '', component: MainPageComponent, pathMatch: 'full' },
  { path: 'home-delivery', component: DeliveryComponent },
  { path: 'contact-us', component: ContactsComponent },
  { path: 'cart', component: CartListComponent, pathMatch: 'full' },
  {
    path: 'order',
    canActivate: [IsCartEmptyGuard],
    canLoad: [IsCartEmptyGuard],
    loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
