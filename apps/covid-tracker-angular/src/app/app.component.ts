import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'covid-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'covid-tracker-angular';

  data$:Observable<string[]>
  data: string[]

  constructor(private dataService:DataService) {
  }

  ngOnInit(): void {
    this.data$ = this.dataService.fetchCountries()
    this.dataService.fetchCountries().subscribe(data=>{
      this.data = data
    })
  }

}
