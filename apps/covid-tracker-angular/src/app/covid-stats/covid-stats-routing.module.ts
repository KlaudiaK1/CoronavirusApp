import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CovidStatsComponent } from './covid-stats/covid-stats.component';
import { GlobalCovidStatsComponent } from './global-covid-stats/global-covid-stats.component';

const routes: Routes = [
  {
    path: 'countries',
    component: CovidStatsComponent,
  },
  {
    path: '',
    component: GlobalCovidStatsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CovidStatsRoutingModule {}
