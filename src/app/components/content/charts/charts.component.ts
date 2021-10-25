import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../shared/services/http-service';
import {DataService} from '../../../shared/services/data.service';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  lineChartCreatedGistsData: ChartDataSets[] = [
    {data: [], label: 'Gists Created'},
  ];

  lineChartCreatedGistsLabels: Label[] = [];

  lineChartCreatedFilesData: ChartDataSets[] = [
    {data: [], label: 'Files per Gists'},
  ];

  lineChartCreatedFilesLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  constructor(private httpService: HttpService, public dataService: DataService) {
    this.dataService.pageTitle = 'Public Gists Charts';
    localStorage.setItem('chart-start-date', new Date().toISOString())
  }

  createdTimeArray = [];
  createdIdsArray =[];
  filesCountArray =[];
  filesCountIdsArray=[];
  ngOnInit(): void {
    this.loadMoreCreatedGists();
    this.loadMoreCreatedFiles();
  }
  loadMoreCreatedGists(){
    this.httpService.get('gists/public').subscribe(res => {
      this.categorizeCreatedGistsInOneMin(res);
    })
  }
  loadMoreCreatedFiles(){
    this.httpService.get('gists/public').subscribe(res => {
      this.categorizeFilesCountInOneMin(res);
    })
  }
  categorizeFilesCountInOneMin(data: any) {
    const startPoint = localStorage.getItem('chart-start-date');
    const startMin = new Date(startPoint).getMinutes();
    data = data.reverse('id');
    data.forEach(item => {
      if(this.filesCountIdsArray.findIndex(arrayItem=>arrayItem===item.id)<0){
        const minHour = new Date(item.created_at).getHours() + ':' + new Date(item.created_at).getMinutes();
        for(let i=0;i<item.files.length;i++){
          this.filesCountArray.push(minHour);
        }
        this.filesCountIdsArray.push(item.id);
      }
    })
    this.calculateFilesCount()
  }
  categorizeCreatedGistsInOneMin(data: any) {
    const startPoint = localStorage.getItem('chart-start-date');
    const startMin = new Date(startPoint).getMinutes();
    console.log(startMin);
    data=data.reverse('id');
    data.forEach(item => {
      if(this.createdIdsArray.findIndex(arrayItem=>arrayItem===item.id)<0){
        const minHour = new Date(item.created_at).getHours() + ':' + new Date(item.created_at).getMinutes();
        this.createdTimeArray.push(minHour);
        this.createdIdsArray.push(item.id);
      }
    })
    this.countSimilarMinHours()
  }

  countSimilarMinHours() {
    let createdCount = {};
    this.createdTimeArray.forEach(function (i) {
      createdCount[i] = (createdCount[i] || 0) + 1;
    });
    let createChartLabels = [];
    let createChartData = [];
    for (let key in createdCount) {
      createChartLabels.push(key);
      createChartData.push(createdCount[key]);
    }
    this.lineChartCreatedGistsData[0].data = createChartData;
    this.lineChartCreatedGistsLabels = createChartLabels;
  }
  calculateFilesCount() {
    let createdCount = {};
    this.createdTimeArray.forEach(function (i) {
      createdCount[i] = (createdCount[i] || 0) + 1;
    });
    let createChartLabels = [];
    let createChartData = [];
    for (let key in createdCount) {
      createChartLabels.push(key);
      createChartData.push(createdCount[key]);
    }
    this.lineChartCreatedFilesData[0].data = createChartData;
    this.lineChartCreatedFilesLabels = createChartLabels;
  }
}
