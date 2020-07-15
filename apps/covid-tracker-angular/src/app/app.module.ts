import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CardsComponent],
  imports: [BrowserModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
