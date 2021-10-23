import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {
  notepads:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
