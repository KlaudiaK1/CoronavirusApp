import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesData } from '../types/covid-api/countries-data.type';
import axios from 'axios';
import { CurrentData } from '../types/covid-api/current-data.type';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private  readonly http: HttpClient) { }

  fetchCountries():Observable<string[]>{
    const url = 'https://api.covid19api.com/summary';
    return this.http.get<CountriesData>(url).pipe(map(({Countries})=> Countries.map(({Country})=>Country)))
  }

  // fetchCurrentData(country):Observable<CurrentData[]>{
  //   const today = new Date();
  //   const prevDay = new Date();
  //   prevDay.setDate(today.getDate() - 1);
  //
  //   const url = `https://api.covid19api.com/country/${country}?from=${prevDay
  //     .toISOString()
  //     .substring(0, 10)}T00:00:00Z&to=${today
  //     .toISOString()
  //     .substring(0, 10)}T00:00:00Z`
  //
  //   try {
  //     const currentData = this.http.get<CurrentData>(url).pipe(map((CurrentData)=>{country, active, recovered, deaths} ))
  //       (
  //       await axios.get(
  //         `https://api.covid19api.com/country/${country}?from=${prevDay
  //           .toISOString()
  //           .substring(0, 10)}T00:00:00Z&to=${today
  //           .toISOString()
  //           .substring(0, 10)}T00:00:00Z`
  //       )
  //     ).data[0];
  //
  //     const active = currentData.Active;
  //     const recovered = currentData.Recovered;
  //     const deaths = currentData.Deaths;
  //     const date = new Date(currentData.Date).toDateString();
  //
  //     return { active, recovered, deaths, date };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
