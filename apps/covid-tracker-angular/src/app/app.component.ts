import { Component, OnInit } from '@angular/core';
import { CovidDataService } from './core/services/covid-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'covid-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'covid-tracker-angular';

  constructor() {
  }

  ngOnInit(): void {
  }

}
