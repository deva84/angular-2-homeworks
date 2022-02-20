import { NgModule } from '@angular/core';

import { UsersGeneralRoutingModule } from './users-general-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersGeneralComponent } from './users-general.component';

@NgModule({
  declarations: [UsersGeneralComponent],
  imports: [SharedModule, UsersGeneralRoutingModule],
})
export class UsersGeneralModule {}
