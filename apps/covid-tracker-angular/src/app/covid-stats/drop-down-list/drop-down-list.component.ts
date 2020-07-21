import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'covid-app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.css']
})
export class DropDownListComponent {

  @Input() countries: string[];
  @Output() countrySelected = new EventEmitter<string>();

  country: string;

  updateValues(country: string) {
    this.country = country;
    this.countrySelected.emit(country);
  }
}
