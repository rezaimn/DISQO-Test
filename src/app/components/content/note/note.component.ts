import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NoteModel} from '../../../shared/models/note.model';
import {HttpService} from '../../../shared/services/http-service';
import {Router} from '@angular/router';
import {DataService} from '../../../shared/services/data.service';
import {UtilsService} from '../../../shared/services/utils.service';
import {NotepadModel} from '../../../shared/models/notepad.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() status: string = 'new';
  @Input() note: NoteModel = {
    id: '',
    title: '',
    note: ''
  };
  @Output() delete = new EventEmitter<NoteModel>();
  @Output() edit = new EventEmitter<NoteModel>();
  @Output() addNew = new EventEmitter<NoteModel>();

  constructor(
              public dataService: DataService,
              public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
  }

  addNewNote() {
    this.addNew.emit(this.note);
  }

  deleteNote() {
    this.delete.emit(this.note);
  }

  editNote() {
    this.edit.emit(this.note);
  }
}
