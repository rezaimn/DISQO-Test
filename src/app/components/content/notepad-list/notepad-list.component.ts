import {Component, OnInit} from '@angular/core';
import {NotepadModel} from '../../../shared/models/notepad.model';
import {HttpService} from '../../../shared/services/http-service';
import {DataService} from '../../../shared/services/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notpad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.scss']
})
export class NotepadListComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router:Router,
    public dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.httpService.get('gists/a4aaaa7b30c7208b9e7f6cf71cbdddd3').subscribe(res => {
      this.dataService.notepadList = JSON.parse(JSON.parse(res.files['notepads.json'].content));
    });
  }

  redirectToCreateNewNotepadPage(){
    this.router.navigate(['/notepad']);
  }
}
