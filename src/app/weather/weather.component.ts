import { Component, Output, EventEmitter } from '@angular/core'
import { WeatherdataService } from '../services/weatherdata.service'
import { Weather } from '../models/weather.model';
import { forecast } from '../models/forecast.model';
//import { forecastComponent } from '../services/forecast.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>();
  @Output() onClick: EventEmitter<forecast> = new EventEmitter<forecast>();

  weather: Weather = new Weather();
  city: String;
  forecast: forecast = new forecast();

  constructor(private weatherData: WeatherdataService) { }

  //search by city, on search box sumbit
  citySearch() {
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
      this.displayforecast();
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


  displayforecast() {
    this.weatherData.getforecastByCity(this.city).subscribe((data: any) => {
      //Updates values on the forecast object
      let forecastArray: any[] = [];
      //to only get 5 days as response give every 3 hours for 5 days
      data.list.forEach((element: any) => {
        if (element.dt_txt.includes("12:00:00")) {
          forecastArray.push(element)
        }
      });

      this.forecast.city = data.city.name;
      this.forecast.currentDay1 = new Date(forecastArray[0].dt_txt).toLocaleString('en-us', { weekday: 'long' });
      this.forecast.currentDay2 = new Date(forecastArray[1].dt_txt).toLocaleString('en-us', { weekday: 'long' });
      this.forecast.currentDay3 = new Date(forecastArray[2].dt_txt).toLocaleString('en-us', { weekday: 'long' });
      this.forecast.currentDay4 = new Date(forecastArray[3].dt_txt).toLocaleString('en-us', { weekday: 'long' });
      this.forecast.currentDay5 = new Date(forecastArray[4].dt_txt).toLocaleString('en-us', { weekday: 'long' });
      this.forecast.day1temp = Math.round(forecastArray[0].main.temp);
      this.forecast.day2temp = Math.round(forecastArray[1].main.temp);
      this.forecast.day3temp = Math.round(forecastArray[2].main.temp);
      this.forecast.day4temp = Math.round(forecastArray[3].main.temp);
      this.forecast.day5temp = Math.round(forecastArray[4].main.temp);
      this.forecast.day1icon = this.weatherData.getIconUrl(forecastArray[0].weather[0].icon);
      this.forecast.day2icon = this.weatherData.getIconUrl(forecastArray[1].weather[0].icon);
      this.forecast.day3icon = this.weatherData.getIconUrl(forecastArray[2].weather[0].icon);
      this.forecast.day4icon = this.weatherData.getIconUrl(forecastArray[3].weather[0].icon);
      this.forecast.day5icon = this.weatherData.getIconUrl(forecastArray[4].weather[0].icon);

      //emits the updated forecast object to be displayed
      this.onClick.emit(this.forecast);
    })

  }
}
