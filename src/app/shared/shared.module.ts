import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpService} from './services/http-service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from './interceptor';
import {DataService} from './services/data.service';
import {UtilsService} from './services/utils.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
  ],
  providers: [
    HttpService,
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
    DataService,
    UtilsService
  ]
})
export class SharedModule {
}
