import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProcessOrderComponent } from './components/process-order/process-order.component';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [ProcessOrderComponent],
  imports: [SharedModule, OrdersRoutingModule],
})
export class OrdersModule {}
