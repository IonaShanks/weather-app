import { Component } from '@angular/core';
import { Weather } from '../models/weather.model';
import { forecast } from '../models/forecast.model';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent {
  weather: Weather = {
    city: "No City Searched",
    description: "-",
    temp: 0,
    icon: "",
    humidity: 0,
    pressure: 0,
    windspeed: 0,
    windDirection: "",
  }
  
  forecast: forecast = {
    city: "",
    currentDay1: "",
    currentDay2: "",
    currentDay3: "",
    currentDay4: "",
    currentDay5: "",
    day1temp: 0,
    day2temp: 0,
    day3temp: 0,
    day4temp: 0,
    day5temp: 0,
    day1icon: "",
    day2icon: "",
    day3icon: "",
    day4icon: "",
    day5icon: ""
  }

  //Updates the information displayed based on the input
  updateWeather(weather: Weather) {
    this.weather = weather;    
  }
  updateforecast(forecast: forecast) {
    this.forecast = forecast;
  }
}