import { Injectable } from '@angular/core';
import { Http }      from '@angular/http'; 
import 'rxjs/add/operator/map';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = 'f5e0382941e80121a237f13918ebcb33';
  url;

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url='http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={'+this.apiKey+'}'
  }

  getWeather(city,state){
    return this.http.get(this.url+'&'+state+'&'+city)
    .map(res => res.json());
  }

  
}
