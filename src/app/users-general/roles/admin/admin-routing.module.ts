import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminOrdersComponent } from './components/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products.component';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { ProductCanDeactivateGuard } from '../../../core/guards/product-can-deactivate.guard';
import { ProductResolveGuard } from '../../../core/guards/product-resolve.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'products', component: AdminProductsComponent },
          { path: 'product/add', component: AdminProductsComponent },
          {
            path: 'product/edit/:productID',
            canDeactivate: [ProductCanDeactivateGuard],
            resolve: [ProductResolveGuard],
            component: AdminProductsComponent,
          },
          { path: 'orders', component: AdminOrdersComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
  static components = [AdminComponent, AdminOrdersComponent, AdminProductsComponent];
}
