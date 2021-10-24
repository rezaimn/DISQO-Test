import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../shared/services/http-service';
import {DataService} from '../../../shared/services/data.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  constructor(private httpService: HttpService, public dataService: DataService) {
    this.dataService.pageTitle = 'Public Gists Charts';
  }

  ngOnInit(): void {
    this.httpService.get('gists/public').subscribe(res => {
      console.log(res, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    })
  }

}
