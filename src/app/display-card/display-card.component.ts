import { Component } from '@angular/core';
import { Weather } from '../app.component';

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
    pressure: 0
  }
  
  //Updates the information displayed based on the input
  update(weather: Weather) {
    this.weather = weather
  }
}
