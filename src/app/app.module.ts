import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './weather/weather.component';
import { DisplayCardComponent } from './display-card/display-card.component';
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider'
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, IgxRadialGaugeModule, MatGridListModule, MatCardModule, MatDividerModule, MatListModule],
  declarations: [AppComponent, WeatherComponent, DisplayCardComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
