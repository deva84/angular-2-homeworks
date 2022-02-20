import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { LocalStorageService } from './core/services/local-storage/local-storage.service';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { Role } from './core/core.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title!: ElementRef<HTMLHeadingElement>;

  @HostListener('window:beforeunload')
  public beforeunloadHandler() {
    this.localStorage.deleteItem('cartItems');
  }

  constructor(
    private localStorage: LocalStorageService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngAfterViewInit(): void {
    this.title.nativeElement.innerText = 'Green Day';
  }

  get isAuthorized() {
    return this.authService.isAuthorized();
  }

  get isAdmin() {
    return this.authService.hasRole(Role.Admin);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
