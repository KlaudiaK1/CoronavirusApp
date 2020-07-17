import { Component, Input } from '@angular/core';
import { CurrentDataObj } from '../../shared/interfaces/covid-api/current-data.interfaces';

@Component({
  selector: 'covid-app-covid-cards',
  templateUrl: './covid-cards.component.html',
  styleUrls: ['./covid-cards.component.css']
})
export class CovidCardsComponent {

  @Input() currentStats:CurrentDataObj


}
