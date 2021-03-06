import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthIntercreptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request is on the way!!');
    const modifyRequest = req.clone({
      headers: req.headers.append('Auth', 'xyz')
    });
    return next.handle(modifyRequest).pipe(tap(events => {
      if (events.type === HttpEventType.Response) {

      }
    }));
  }

}
