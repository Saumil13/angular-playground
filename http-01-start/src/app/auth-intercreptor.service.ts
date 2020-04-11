import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthIntercreptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on the way!!');
    return next.handle(req);
  }

}
