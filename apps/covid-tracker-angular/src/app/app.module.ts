import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { DropDownListComponent } from './components/drop-down-list/drop-down-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CardsComponent, DropDownListComponent],
  imports: [BrowserModule, MatCardModule , HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
