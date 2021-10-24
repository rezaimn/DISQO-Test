import {Injectable} from '@angular/core';
import {initializeNotepad, NotepadModel} from '../models/notepad.model';
import {DataService} from './data.service';
import {initializeNote} from '../models/note.model';
import {HttpService} from './http-service';


@Injectable()
export class UtilsService {

  constructor(public dataService: DataService, private httpService:HttpService) {
  }

  generateRandomStringId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
  }

  findNotepadById(id: string) {
    const notepadIndex = this.dataService.notepadList.findIndex(item => item.id === id);
    if (notepadIndex >= 0) {
      return {notepad: this.dataService.notepadList[notepadIndex], notepadIndex: notepadIndex};
    } else {
      return {notepad: initializeNotepad, notepadIndex: -1};
    }
  }

  findNoteIndexById(notepad: NotepadModel, id: string) {
    return notepad.notes.findIndex(item => item.id === id);
  }

  saveChangesToGist(notepadList:NotepadModel[]){
    console.log(notepadList,'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
    const stringified = JSON.stringify(JSON.stringify(notepadList));
    this.httpService.patch('gists/a4aaaa7b30c7208b9e7f6cf71cbdddd3',
      {"description":"Edit gist","files":{"notepads.json":{"content":stringified}}}).subscribe(res=>{
    })
  }
}
