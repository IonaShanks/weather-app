import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { WeatherdataService } from './weatherdata.service';
import { mockWeatherJSON } from '../../mocks/mockWeather';
import { mockForcastJSON } from '../../mocks/mockForcast';
import { mockIconURL } from '../../mocks/mockIcon'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('WeatherdataService', () => {
  let service: WeatherdataService;
  let httpController: HttpTestingController;
  let weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=c2f39d95f2877a016e4a1ecea6b58c56&units=metric';
  let forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=London&APPID=c2f39d95f2877a016e4a1ecea6b58c56&units=metric'

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule, HttpClientTestingModule] });
    service = TestBed.inject(WeatherdataService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Test getCurrentWeatherByCity api call
  it('should call getCurrentWeatherByCity and return a JSON object of weather', () => {
    service.getCurrentWeatherByCity('London').subscribe((res) => {
      expect(res).toEqual(mockWeatherJSON);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${weatherUrl}`,
    });

    req.flush(mockWeatherJSON);
  });

  //Test getIconUrl returns correct url
  it('should call getIconUrl and return a url for the icon', () => {
    expect(service.getIconUrl('04d')).toEqual(mockIconURL);
  });

  //Test getforecastByCity api call
  it('should call getforecastByCity and return a JSON object of forcast', () => {
    service.getforecastByCity('London').subscribe((res) => {
      expect(res).toEqual(mockForcastJSON);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${forcastUrl}`,
    });

    req.flush(mockForcastJSON);
  });

});
