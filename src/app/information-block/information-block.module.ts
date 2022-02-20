import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainPageComponent, PageNotFoundComponent, DeliveryComponent, ContactsComponent],
  imports: [SharedModule, RouterModule],
})
export class InformationBlockModule {}
