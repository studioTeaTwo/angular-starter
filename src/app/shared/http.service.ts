import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  test() {
    this.httpClient.get(`/api/test`, {
      observe: 'body',
      responseType: 'text',
    })
      .subscribe(
        response => {
          console.log('response', response);
        },
        error => {
          console.log('error', error);
        }
      );
  }

  exHeader() {
    this.httpClient.head(`/api/example/header`, {
      observe: 'response',
      responseType: 'text',
    })
      .subscribe(
        response => {
          console.log('response', response, response.headers);
        }
      );
  }
}
