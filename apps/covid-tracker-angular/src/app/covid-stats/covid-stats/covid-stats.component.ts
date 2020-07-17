import { Component,  OnInit } from '@angular/core';
import { CovidDataService } from '../../core/services/covid-data.service';
import { CurrentDataObj } from '../../shared/interfaces/covid-api/current-data.interfaces';
import { DailyDataObj } from '../../shared/interfaces/covid-api/daily-data.interfaces';

@Component({
  selector: 'covid-app-covid-stats',
  templateUrl: './covid-stats.component.html',
  styleUrls: ['./covid-stats.component.css']
})
export class CovidStatsComponent implements OnInit {
  currentData:CurrentDataObj;
  dailyData:DailyDataObj[] = [];
  countriesData:string[] = [];

  constructor(private dataService:CovidDataService) {
  }

  ngOnInit(): void {
    this.dataService.fetchCountries().subscribe(data => {
      this.countriesData = data;
    });
    this.dataService.fetchCurrentData('Poland').subscribe(d=>{
      this.currentData=d
    });
    this.dataService.fetchDailyData('Poland').subscribe(d=>{
      this.dailyData=d
    });
  }
  onSelect(country:string): void {
    this.dataService.fetchCurrentData(country).subscribe(d=>{
      this.currentData=d
    });
    this.dataService.fetchDailyData(country).subscribe(d=>{
      this.dailyData=d
    });
  }


}
