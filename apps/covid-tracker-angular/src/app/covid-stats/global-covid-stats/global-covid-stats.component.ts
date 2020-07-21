import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../../core/services/covid-data.service';
import { GlobalDataObj } from '../../shared/interfaces/covid-api/global-data.interfaces';

@Component({
  selector: 'covid-app-global-covid-stats',
  templateUrl: './global-covid-stats.component.html',
  styleUrls: ['./global-covid-stats.component.css']
})
export class GlobalCovidStatsComponent implements OnInit {
  globalData: GlobalDataObj;


  constructor(private dataService:CovidDataService) {

  }

  ngOnInit(): void {
    this.dataService.fetchGlobalData().subscribe(d=>{
      this.globalData=d
    });
  }

}
