import { Component, Input, OnInit } from '@angular/core';
import { DailyDataObj } from '../../shared/interfaces/covid-api/daily-data.interfaces';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'covid-app-covid-chart',
  templateUrl: './covid-chart.component.html',
  styleUrls: ['./covid-chart.component.css']
})
export class CovidChartComponent implements OnInit{

  @Input()
  set dailyStats(dailyStats:DailyDataObj[]){
    const active =  dailyStats.map(({ Active }) => Active);
    const deaths = dailyStats.map(({ Deaths }) => Deaths);
    const date = dailyStats.map(({ Date }) => Date);
    const formattedDate = date.map((d) => new Date(d).toDateString());
    this.lineChartData=[
      { data: active, label: 'Active', fill: true, },
      { data: deaths, label: 'Deaths', fill: true, }
    ]
    this.lineChartLabels = formattedDate

  }

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];

  public lineChartColors: Color[] = [
    {
      borderColor: 'orange',
      pointBorderColor: 'orange',
      pointHoverBackgroundColor: 'rgb(249, 166, 2)',
      pointHoverBorderColor: 'black',
    },
    {
      borderColor: 'red',
      pointBorderColor: 'red',
      pointHoverBackgroundColor: 'red',
      pointHoverBorderColor: 'black',
    }
  ];
  public LineChartOptions = {
    scales: {
      xAxes: [{
        ticks: { fontColor: 'rgb(220, 220, 220)' },
      }],
      yAxes: [{
        ticks: { fontColor: 'rgb(220, 220, 220)' },
      }]
    },
    legend : {
      labels : {
        fontColor : 'rgb(220, 220, 220)',
      }
    }
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  ngOnInit(): void {
  }

}
