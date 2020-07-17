import { NgModule } from '@angular/core';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';
import { CovidCardsComponent } from './covid-cards/covid-cards.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { CovidChartComponent } from './covid-chart/covid-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [CovidStatsComponent, CovidCardsComponent, DropDownListComponent, CovidChartComponent],
  exports: [
    CovidStatsComponent
  ],
  imports: [
    SharedModule,
    MatCardModule,
    ChartsModule,
  ]
})
export class CovidStatsModule {
}
