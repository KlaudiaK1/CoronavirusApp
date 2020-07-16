import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'covid-app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent implements OnInit {

  constructor(private dataService:DataService) { }

  data$:Observable<string[]>
  data: string[]

  ngOnInit(): void {
    this.data$ = this.dataService.fetchCountries()
    this.dataService.fetchCountries().subscribe(data=>{
      this.data = data
    })
  }

}
