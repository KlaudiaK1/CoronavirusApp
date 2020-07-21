import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidStatsModule } from './covid-stats/covid-stats.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule, HttpClientModule, CovidStatsModule,CoreModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
