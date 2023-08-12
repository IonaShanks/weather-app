import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, IgxRadialGaugeModule],
  declarations: [AppComponent, WeatherComponent, DisplayCardComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
