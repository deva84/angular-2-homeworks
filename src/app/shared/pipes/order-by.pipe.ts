import { Pipe, PipeTransform } from '@angular/core';
import { SortProperty } from '../../cart/components/cart-list/cart-list.component';

export type Order = 'ASC' | 'DESC';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(items: any[], properties: SortProperty[] = ['name'], order: Order = 'DESC'): any[] {
    console.log(properties, order);
    return items.sort((a, b) => {
      for (let i = 0; i < properties.length; i++) {
        if (a[properties[i]] > b[properties[i]]) {
          // эти операторы return прерывают цикл? если да, то можно обойтись без for просто сортироват по первому свойству
          return order === 'ASC' ? 1 : -1;
        }
        if (a[properties[i]] < b[properties[i]]) {
          return order === 'ASC' ? -1 : 1;
        }
      }
      return 0;
    });
  }
}
