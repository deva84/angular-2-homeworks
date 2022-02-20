import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';

export interface ConfigModel {
  id: string;
  login: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export enum Role {
  User = 'User',
  Admin = 'Admin',
}

export class User {
  role!: Role;
}

export interface ICanComponentDeactivate {
  canDeactivate: () =>
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree;
}
