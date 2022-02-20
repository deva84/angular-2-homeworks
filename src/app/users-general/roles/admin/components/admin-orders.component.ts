import { Component } from '@angular/core';

@Component({
  template: `<p>Here you can see and manage list of <span>orders</span>. For Admin only!</p>`,
  styles: ['p {text-align: center} span {text-transform: uppercase; color: lightsalmon}'],
})
export class AdminOrdersComponent {}
