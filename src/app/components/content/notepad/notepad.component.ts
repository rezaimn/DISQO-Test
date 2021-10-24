import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpService} from '../../../shared/services/http-service';
import {initializeNotepad, NotepadModel} from '../../../shared/models/notepad.model';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';
import {UtilsService} from '../../../shared/services/utils.service';
import {NoteModel} from '../../../shared/models/note.model';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {
  notepad: NotepadModel = {
    id: '',
    title: '',
    notes: []
  };
  newNote = {
    id: '',
    title: '',
    note: ''
  };
  id;
  notepadValidationMessage = 'You need to add at least one note';

  constructor(
    private httpService: HttpService,
    public utilsService: UtilsService,
    public dataService: DataService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      const {notepad} = this.utilsService.findNotepadById(this.id);
      this.notepad = notepad;
      if (this.notepad.id !== '') {
        this.dataService.pageTitle = this.notepad.title;
      } else {
        this.dataService.pageTitle = 'New Notepad';
      }
    }
  }

  ngOnInit(): void {

  }

  saveNotepad(form:any) {
    if(form.valid){
      const {notepad, notepadIndex} = this.utilsService.findNotepadById(this.notepad.id);
      if (notepadIndex >= 0) {
        this.dataService.notepadList[notepadIndex] = {...this.notepad};
      } else {
        this.notepad.id = this.utilsService.generateRandomStringId();
        this.dataService.notepadList.push(this.notepad);
      }
      if(this.notepad.notes.length>0){
        this.utilsService.saveChangesToGist(this.dataService.notepadList);
      }else {
        form.form.errors={invalid:true}
      }
    }

  }

  addNewNote(note: NoteModel) {
    note.id = this.utilsService.generateRandomStringId();
    const {notepadIndex} = this.utilsService.findNotepadById(this.notepad.id);
    if (notepadIndex >= 0) {
      this.dataService.notepadList[notepadIndex].notes.push({...note});
      this.utilsService.saveChangesToGist(this.dataService.notepadList);
    } else {
      this.notepad.notes.push({...note});
    }
  }

  deleteNote(note: NoteModel) {
    const {notepad, notepadIndex} = this.utilsService.findNotepadById(this.notepad.id);
    const noteIndex = this.utilsService.findNoteIndexById(notepad, note.id);
    if (notepadIndex >= 0) {
      if (noteIndex >= 0) {
        this.dataService.notepadList[notepadIndex].notes.splice(noteIndex, 1);
        this.utilsService.saveChangesToGist(this.dataService.notepadList);
      }
    } else {
      this.notepad.notes.splice(noteIndex, 1);
    }
  }

  editNote(note: NoteModel) {
    const {notepad, notepadIndex} = this.utilsService.findNotepadById(this.notepad.id);
    if (notepadIndex >= 0) {
      const noteIndex = this.utilsService.findNoteIndexById(notepad, note.id);
      if (noteIndex >= 0) {
        this.dataService.notepadList[notepadIndex].notes[noteIndex] = {...note};
        this.utilsService.saveChangesToGist(this.dataService.notepadList);
      }
    }
  }
}
