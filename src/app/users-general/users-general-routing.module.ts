import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersGeneralComponent } from './users-general.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { Role } from '../core/core.models';

const routes: Routes = [
  { path: 'login', component: UsersGeneralComponent },
  {
    path: 'admin',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin],
    },
    loadChildren: () => import('./roles/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'user',
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
    data: {
      roles: [Role.User],
    },
    loadChildren: () => import('./roles/users/users.module').then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersGeneralRoutingModule {}
