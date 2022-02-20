import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { ICanComponentDeactivate } from '../core.models';

@Injectable({
  providedIn: 'root',
})
export class ProductCanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate> {
  constructor(private localStorage: LocalStorageService) {}

  private getCartState(): Observable<boolean> {
    const isCartEmpty = this.localStorage.getItem('cartItems');
    return of(Boolean(isCartEmpty));
  }

  // implementation of this method will be provided later
  canDeactivate(
    component: ICanComponentDeactivate
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
