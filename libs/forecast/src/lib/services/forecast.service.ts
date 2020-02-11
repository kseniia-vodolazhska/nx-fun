import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentConfiguration } from '@nx-fun/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Forecast } from '../models/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient, @Inject(EnvironmentConfiguration)private envConfig: EnvironmentConfiguration) {}

  loadForecast(): Observable<Forecast> {
    return this.http.get(this.envConfig.url).pipe(map((res: { weather: Forecast }) => res.weather[0]), tap(console.log));
  }
}
