import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotepadComponent} from './notepad/notepad.component';
import {NoteComponent} from './note/note.component';
import {ChartsComponent} from './charts/charts.component';
import {ContentComponent} from './content.component';
import {NotepadListComponent} from './notepad-list/notepad-list.component';


const routes: Routes = [
  {
    path: '',
    component: ContentComponent,
    children:[
      {path: '', pathMatch: 'full', redirectTo: 'notepads'},
      {
        path: 'notepads',
        component: NotepadListComponent,
      },
      {
        path: 'notepad',
        component: NotepadComponent,
      },
      {
        path: 'notepads/:id',
        component: NotepadComponent,
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
