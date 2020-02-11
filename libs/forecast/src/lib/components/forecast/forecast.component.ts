import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../../services/forecast.service';
import { Forecast } from '../../models/forecast.model';

@Component({
  selector: 'nx-fun-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast: Forecast;

  constructor(private forecastService: ForecastService) {
    this.forecastService.loadForecast().subscribe(f => this.forecast = f);
  }

  ngOnInit(): void {
  }

}
