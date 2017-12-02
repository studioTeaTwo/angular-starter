import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpHeaderResponse,
  HttpErrorResponse,
  HttpHeaders,
  HttpSentEvent,
  HttpEventType,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from 'environments/environment';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  readonly domain: string = environment.domain;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const req = request.clone({
      url: this.domain + request.url,
      setHeaders: {
        test: 'value',
        test2: 'value2',
        test3: 'value3'
      },
      setParams: {
        param1: 'value',
        param2: 'value2',
        param3: 'value3',
      }
    });
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
