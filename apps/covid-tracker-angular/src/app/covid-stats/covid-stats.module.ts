import { NgModule } from '@angular/core';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';
import { CovidCardsComponent } from './covid-cards/covid-cards.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../shared/shared.module';
import { CovidChartComponent } from './covid-chart/covid-chart.component';
import { ChartsModule } from 'ng2-charts';
import { GlobalCovidStatsComponent } from './global-covid-stats/global-covid-stats.component';
import { CovidStatsRoutingModule } from './covid-stats-routing.module';


@NgModule({
  declarations: [CovidStatsComponent, CovidCardsComponent, DropDownListComponent, CovidChartComponent, GlobalCovidStatsComponent],
  exports: [
    CovidStatsComponent
  ],
  imports: [
    SharedModule,
    MatCardModule,
    ChartsModule,CovidStatsRoutingModule
  ]
})
export class CovidStatsModule {
}
