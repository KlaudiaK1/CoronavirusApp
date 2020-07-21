import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountriesData } from '../../shared/interfaces/covid-api/countries-data.interfaces';
import { CurrentDataObj } from '../../shared/interfaces/covid-api/current-data.interfaces';
import { DailyDataObj } from '../../shared/interfaces/covid-api/daily-data.interfaces';
import { GlobalDataObj } from '../../shared/interfaces/covid-api/global-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {

  constructor(private readonly http: HttpClient) {
  }

  fetchCountries(): Observable<string[]> {
    const url = 'https://api.covid19api.com/summary';
    return this.http.get<CountriesData>(url).pipe(map(({ Countries }) => Countries.map(({ Country }) => Country)));
  }

  fetchGlobalData(): Observable<GlobalDataObj> {
    const url = 'https://api.covid19api.com/world/total';
    return this.http.get<GlobalDataObj>(url);
  }

  fetchDailyData(country): Observable<DailyDataObj[]> {
    const url = `https://api.covid19api.com/total/dayone/country/${country}`;
    return this.http.get<DailyDataObj[]>(url).pipe(map((data) => (data.map(({ Country, Active, Deaths, Date }) => ({
      Country,
      Active,
      Deaths,
      Date
    })))));
  }

  fetchCurrentData(country): Observable<CurrentDataObj> {
    const today = new Date();
    const prevDay = new Date();
    prevDay.setDate(today.getDate() - 1);

    const url = `https://api.covid19api.com/country/${country}?from=${prevDay
      .toISOString()
      .substring(0, 10)}T00:00:00Z&to=${today
      .toISOString()
      .substring(0, 10)}T00:00:00Z`;

    return this.http.get<CurrentDataObj[]>(url).pipe(map(([{
      Country,
      Active,
      Recovered,
      Deaths
    }]) => ({ Country, Active, Recovered, Deaths })));
  }
}
