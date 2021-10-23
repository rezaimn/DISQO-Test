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
    this.httpService.get('gists/public').subscribe(res=>{
    })
  }

}
