import { Component, Input} from '@angular/core';
import { DailyDataObj } from '../../shared/interfaces/covid-api/daily-data.interfaces';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'covid-app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent{
  @Input() dailyStats: DailyDataObj[] = []; //TODO+

  public lineChartData: ChartDataSets[] = [
    { data: this.dailyStats.map(({ Active }) => Active), label: 'Active', borderColor: 'orange', fill: true, },
    { data: this.dailyStats.map(({ Deaths }) => Deaths), label: 'Deaths', borderColor: 'red', fill: true, }
  ];
  public lineChartLabels: Label[] = [
    this.dailyStats.map(({ Date }) => Date)
  ];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    annotation: undefined,
    responsive: true
  };
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(88,222,222,0.3)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}
