import { Component } from '@angular/core';

export class Weather {
  city: String
  description: String;
  temp: number;
  icon: String;
  humidity: number;
  pressure: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'weather';
}
