import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ForecastComponent } from './components/forecast/forecast.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [ForecastComponent],
  declarations: [ForecastComponent]
})
export class ForecastModule {}
