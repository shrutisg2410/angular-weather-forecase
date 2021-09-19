import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { pxsuffix } from './pxsuffix.pipe';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  apiKey = '371d4e84f04f4e6eafe38174f3de11e5';
  private url = 'https://api.weatherbit.io/v2.0/forecast/daily';

  cities = ['Raleigh', 'New York', 'Chicago', 'Los Angeles', 'Houston'];
  selectedCity = 'Raleigh';
  foreCastData = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getFiveForecastData();
  }

  /**
   * Method to get the five forecast data based on the selected city.
   */
  getFiveForecastData() {
    const params = {
      city: this.selectedCity,
      days: 5,
      key: this.apiKey,
    };

    this.http.get(this.url, { params }).subscribe((res: any) => {
      this.foreCastData = res.data;
    });
  }

  /**
   * Method to get the selected city from dropdown.
   */
  onCityChange(ev) {
    this.selectedCity = ev.target.value;
    this.getFiveForecastData();
  }
}
