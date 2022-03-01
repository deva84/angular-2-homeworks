import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from '../core/core.models';
import { AuthService } from '../core/services/auth/auth.service';

@Component({
  selector: 'app-users-general',
  templateUrl: './users-general.component.html',
  styleUrls: ['./users-general.component.less'],
})
export class UsersGeneralComponent {
  Role = Role;  // для чего эта строчка, если this.Role нигде не используется?

  constructor(private router: Router, private authService: AuthService) {}

  onLogin(role: Role) {
    this.authService.login(role);
    const path = role === Role.Admin ? '/admin' : '/user';
    this.router.navigate([path]);
  }
}
