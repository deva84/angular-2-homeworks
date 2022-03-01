import { Injectable } from '@angular/core';
import { Role, User } from '../../core.models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user!: User | null;

  isAuthorized() {
    return !!this.user;
  }

  hasRole(role: Role) {
    return this.isAuthorized() && this.user!.role === role;
  }

  login(role: Role) {
    console.log('!!! ', role);
    this.user = { role };
  }

  logout() {
    this.user = null;
  }
}
