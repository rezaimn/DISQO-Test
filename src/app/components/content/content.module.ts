import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NotepadComponent} from './notepad/notepad.component';
import {NoteComponent} from './note/note.component';
import {ChartsComponent} from './charts/charts.component';
import {ContentRoutingModule} from './content-routing.module';
import {ContentComponent} from './content.component';
import {SharedModule} from '../../shared/shared.module';
import {NotepadListComponent} from './notepad-list/notepad-list.component';


@NgModule({
  declarations: [
    ContentComponent,
    NotepadComponent,
    NoteComponent,
    ChartsComponent,
    NotepadListComponent
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
