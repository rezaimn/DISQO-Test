import {Injectable} from '@angular/core';
import {NotepadModel} from '../models/notepad.model';


@Injectable()
export class DataService {

  notepadList: NotepadModel[] = [];
  pageTitle = 'Notepads';

  constructor() {

  }
}
