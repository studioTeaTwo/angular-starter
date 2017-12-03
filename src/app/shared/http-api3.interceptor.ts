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
export class HttpApi3Interceptor implements HttpInterceptor {
  readonly domain: string = environment.domain;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('3', next);
    return next.handle(request)
            .do((event: HttpEvent<any>) => {
              console.log('event3', event);
              if (event.type === HttpEventType.Sent) {
                console.log('sent3');
              }
              return event;
            })
            .catch((err: any, caught) => {
              console.log('cahtch3', err);
              return Observable.throw(err);
            });
  }
}
