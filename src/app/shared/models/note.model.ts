export interface NoteModel {
  id: string;
  title: string;
  note: string;
}

export const initializeNote: NoteModel = {
  id: '',
  title: '',
  note: ''
}
