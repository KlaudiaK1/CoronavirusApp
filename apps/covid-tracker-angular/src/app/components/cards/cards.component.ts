import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'covid-app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  summary$:Observable<any>

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

  }

}
