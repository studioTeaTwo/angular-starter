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
export class HttpApi2Interceptor implements HttpInterceptor {
  readonly domain: string = environment.domain;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let headers = new HttpHeaders();
    headers = headers.set(`test2`, `value2`);

    const params = request.params.set(`param1`, `value1`)
      .set(`param2`, `value2`)
      .set(`param3`, `value3`);

    console.log('2', {...headers}, params);

    const req = request.clone({
      // url: this.domain + request.url,
      setHeaders: {
        // test1: 'value1',
        // test2: 'value2',
        test3: 'value3'
      },
      setParams: {
        // param1: 'value1',
        // param2: 'value2',
        param3: 'value3',
      }
    });
    console.log(req);
    return next.handle(request)
            .do((event: HttpEvent<any>) => {
              console.log('event2', event);
              if (event.type === HttpEventType.Sent) {
                console.log('sent2');
              }
              return event;
            })
            .catch((err: any, caught) => {
              console.log('cahtch2', err);
              return Observable.throw(err);
            });
  }
}
