import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import 'app/shared/rxjs-operators';

import { MaterialModule } from './material.module';
import { HttpApiInterceptor } from 'app/shared/http-api.interceptor';
import { HttpService } from 'app/shared/http.service';

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
      useClass: HttpApiInterceptor,
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
