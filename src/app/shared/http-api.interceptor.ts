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
  HttpParams,
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
        test1: 'value1',
        test2: 'value2',
        // test3: 'value3'
      },
      setParams: {
        param1: 'value1',
        param2: 'value2',
        // param3: 'value3',
      }
    });
    console.log(req);
    return next.handle(req)
            .do((event: HttpEvent<any>) => {
              console.log('event', event);
              return event;
            })
            .catch((error: any) => {
              if (error instanceof HttpErrorResponse) {
                console.log('httperror', error);
                switch (error.status) {
                  case 304:
                    console.log('304');
                    return Observable.throw('304');
                  case 401:
                    console.log('401');
                    return Observable.throw('401');
                }
              }
              return Observable.throw(error);
            });
  }
}
