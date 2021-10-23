import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotepadComponent} from './notepad/notepad.component';
import {NoteComponent} from './note/note.component';
import {ChartsComponent} from './charts/charts.component';
import {ContentComponent} from './content.component';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children:[
      {path: '', pathMatch: 'full', redirectTo: 'notepad'},
      {
        path: 'notepad',
        component: NotepadComponent,
      },
      {
        path: 'notepad:/id/note',
        component: NoteComponent
      },
      {
        path: 'charts',
        component: ChartsComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule {
}
