import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { promise } from 'protractor';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authServie: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServie.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authServie.isAuthenticated().then(
      (authenticated: boolean) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

}
