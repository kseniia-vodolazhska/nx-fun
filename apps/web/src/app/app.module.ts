import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnvironmentConfiguration } from '@nx-fun/core';
import { ForecastModule } from '@nx-fun/forecast';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ForecastModule],
  providers: [{
    provide: EnvironmentConfiguration,
    useValue: { url: 'https://api.openweathermap.org/data/2.5/weather?q=oslo&appid=068807d9c662d3488d866e65515a01c8' }
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
