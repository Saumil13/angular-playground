import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable({ 'providedIn': 'root' })
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return this.authService.user.pipe(take(1), exhaustMap(
      users => {
        if (!users) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({ params: new HttpParams().set('auth', users.getToken()) });
        return next.handle(modifiedReq);
      }
    )
    );
  }

}
