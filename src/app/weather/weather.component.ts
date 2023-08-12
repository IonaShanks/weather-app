import { Component, Output, EventEmitter } from '@angular/core'
import { WeatherdataService } from '../services/weatherdata.service'
import { Weather } from '../app.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();
  weather: Weather = new Weather();
  city: String;

  constructor(private weatherData: WeatherdataService) { }

  submit() {
    this.weatherData.getCurrentWeatherByCity(this.city).subscribe((data: any) => {
      //Updates values on the weather object
      this.weather.city = data.name;
      this.weather.description = data.weather[0].description;
      this.weather.temp = Math.round(data.main.temp);
      this.weather.icon = this.weatherData.getIconUrl(data.weather[0].icon)
      this.weather.humidity = data.main.humidity;
      this.weather.pressure = data.main.pressure;

      //emits the updated weather object to be displayed
      this.onSelection.emit(this.weather);

      //To clear search bar after submitting
      this.city = "";
    },
      (error) => {
        let errorMessage;
        //Error updates to display city not found on 404
        if (error.status == 404) {
          errorMessage = 'No city found named ' + this.city;
        }
        //Any other error
        else {
          errorMessage = 'Something has gone wrong, please try again later'
        }
        this.weather = new Weather();
        this.weather.city = 'Errorcode: ' + error.status;
        this.weather.description = errorMessage;

        //emits the updated weather object to be displayed
        this.onSelection.emit(this.weather);
      })
  }
}
