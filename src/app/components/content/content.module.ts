import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotepadComponent} from './notepad/notepad.component';
import {NoteComponent} from './note/note.component';
import {ChartsComponent} from './charts/charts.component';
import {ContentRoutingModule} from './content-routing.module';
import {ContentComponent} from './content.component';
import {SharedModule} from '../../shared/shared.module';
import {Interceptor} from '../../shared/services/interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpService} from '../../shared/services/http-service';



@NgModule({
  declarations: [
    ContentComponent,
    NotepadComponent,
    NoteComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    SharedModule
  ],
  providers:[
  ]
})
export class ContentModule { }
