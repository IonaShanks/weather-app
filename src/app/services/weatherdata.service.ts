import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apiConfig } from '../config';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  //API call to OpenWeather to get the weather based on the city input
  getCurrentWeatherByCity(city: String) {
    return this.http.get(apiConfig.host + '/weather?q=' + city + '&APPID=' + apiConfig.apiKey + '&units=' + apiConfig.unit)
  }

  //Call to get the image for the icon id provided by OpenWeather
  getIconUrl(icon: String) {
    return 'https://openweathermap.org/img/w/' + icon + ".png"
  }

  //API call to OpenWeather to get the weather forecast based on the city input
  getforecastByCity(city: String) {
    return this.http.get(apiConfig.host + '/forecast?q=' + city + '&APPID=' + apiConfig.apiKey + '&units=' + apiConfig.unit)
  }
}
