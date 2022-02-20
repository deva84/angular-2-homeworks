import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  CanLoad,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { Role } from '../core.models';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(['login']);
      return false;
    }

    const roles = route.data.roles as Role[];
    if (roles && !roles.some((r) => this.authService.hasRole(r))) {
      this.router.navigate(['page-not-found']);
      return false;
    }

    return true;
  }

  canLoad(
    route: Route
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthorized()) {
      return false;
    }

    const roles = route.data && (route.data.roles as Role[]);
    if (roles && !roles.some((r) => this.authService.hasRole(r))) {
      return false;
    }

    return true;
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthorized()) {
      this.router.navigate(['login']);
      return false;
    }

    const roles = childRoute.data.roles as Role[];
    if (roles && !roles.some((r) => this.authService.hasRole(r))) {
      this.router.navigate(['error', 'not-found']);
      return false;
    }

    return true;
  }
}
