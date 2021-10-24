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
    return (Math.random() + 1).toString(36).substring(7);
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
    this.httpService.patch('gists/56b62d9090b605205d1b0d0227ab15a3',
      {"description":"Edit gist","files":{"notepads.json":{"content":stringified}}}).subscribe(res=>{
    })
  }
}
