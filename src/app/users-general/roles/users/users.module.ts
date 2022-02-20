import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersRoutingModule.components],
  imports: [SharedModule, UsersRoutingModule],
})
export class UsersModule {}
