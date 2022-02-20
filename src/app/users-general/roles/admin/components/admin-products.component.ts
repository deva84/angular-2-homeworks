import { Component } from '@angular/core';

@Component({
  template: `<p>Here you can see and manage list of <span>products</span>. For Admin only!</p>`,
  styles: ['p {text-align: center} span {text-transform: uppercase; color: lightsalmon}'],
})
export class AdminProductsComponent {}
