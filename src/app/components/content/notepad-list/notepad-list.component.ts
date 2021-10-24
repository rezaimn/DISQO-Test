import {Component, OnInit} from '@angular/core';
import {NotepadModel} from '../../../shared/models/notepad.model';
import {HttpService} from '../../../shared/services/http-service';
import {DataService} from '../../../shared/services/data.service';
import {Router} from '@angular/router';
import {UtilsService} from '../../../shared/services/utils.service';

@Component({
  selector: 'app-notpad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.scss']
})
export class NotepadListComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router: Router,
    public dataService: DataService,
    public utilsService: UtilsService
  ) {
  }

  ngOnInit(): void {
    this.httpService.get('gists/56b62d9090b605205d1b0d0227ab15a3').subscribe(res => {
      this.dataService.notepadList = JSON.parse(JSON.parse(res.files['notepads.json'].content));
    });
  }

  redirectToCreateNewNotepadPage() {
    this.router.navigate(['/notepad']);
  }

  redirectToEditNotepad(notepadId: string) {
    this.router.navigate(['/notepads/' + notepadId]);
  }

  deleteNotepad(notepadId: string) {
    const {notepadIndex} = this.utilsService.findNotepadById(notepadId);
    if (notepadIndex >= 0) {
      this.dataService.notepadList.splice(notepadIndex, 1);
      this.utilsService.saveChangesToGist(this.dataService.notepadList);
    }
  }
}
