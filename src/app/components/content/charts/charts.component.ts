import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../shared/services/http-service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(private httpService:HttpService) { }

  ngOnInit(): void {
    this.httpService.get('gists/a4aaaa7b30c7208b9e7f6cf71cbdddd3').subscribe(res=>{
      console.log(JSON.parse(JSON.parse(res.files['notes.json'].content)),'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
    })
    const test={
      test:'test',
      array:[
        {
          id:0
        },
        {
          id:1
        }
      ]
    }
    const stringified =JSON.stringify(JSON.stringify(test));
    this.httpService.patch('gists/a4aaaa7b30c7208b9e7f6cf71cbdddd3',
      {"description":"Edit gist","files":{"notes.json":{"content":stringified}}}).subscribe(res=>{
    })
  }

}
