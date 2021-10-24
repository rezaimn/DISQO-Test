import {NoteModel} from './note.model';

export interface NotepadModel {
  id:string;
  title: string;
  notes: NoteModel[];
}


export const initializeNotepad: NotepadModel = {
  id: '',
  title: '',
  notes: []
};
