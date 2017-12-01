import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'app/shared/rxjs-operators';

import { MaterialModule } from './material.module';
import { HttpApiInterceptor } from 'app/shared/http-api.interceptor';
import { HttpService } from 'app/shared/http.service';
import { HttpApi2Interceptor } from 'app/shared/http-api2.interceptor';
import { HttpApi3Interceptor } from 'app/shared/http-api3.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  declarations: [],
  exports: [
    MaterialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApi2Interceptor,
      // 必須：HTTP_INTERCEPTORSが配列であることを示す
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApi3Interceptor,
      // 必須：HTTP_INTERCEPTORSが配列であることを示す
      multi: true
    }
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        HttpService,
      ]
    };
  }
}
