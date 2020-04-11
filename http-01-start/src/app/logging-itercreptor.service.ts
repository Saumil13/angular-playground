import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class LoggingIntercreptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('OutGoing Request: ' + req.url);
    return next.handle(req).pipe(tap(events => {
      if (events.type === HttpEventType.Response) {
        console.log('Response arrived. Data: ' + events.body);
      }
    }));
  }

}
