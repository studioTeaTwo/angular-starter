import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpHeaderResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const req = request.clone();
    return next.handle(req)
            .map((event: HttpEvent<any>) => {
              console.log('event', event);
              return event;
            })
            .catch((err: any, caught) => {
              console.log('cahtch', err);
              return Observable.throw(err);
            });
  }
}
