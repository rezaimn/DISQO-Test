import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotepadComponent} from './notepad/notepad.component';
import {NoteComponent} from './note/note.component';
import {ChartsComponent} from './charts/charts.component';
import {ContentRoutingModule} from './content-routing.module';
import {ContentComponent} from './content.component';



@NgModule({
  declarations: [
    ContentComponent,
    NotepadComponent,
    NoteComponent,
    ChartsComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule
  ]
})
export class ContentModule { }
