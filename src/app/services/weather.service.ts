import { Injectable } from '@angular/core';
import axios from 'axios';
const favoriteCities = []

const KEY = 'tBiJIiEX3QUH4wlV1eGDeGPi6evLzjSs'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  public async getCityList(q) {
    const cancelToken = axios.CancelToken; // cancel token
    const source = cancelToken.source();

    try {
      const resp = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${KEY}&q=${q}`,
        { cancelToken: source.token })
      return resp.data
    }
    catch (err) {
      if (axios.isCancel(err)) { // check if the request cancelld
        source.cancel()
        throw "Catch - axios request cancelled"
      }
    }
    return source.cancel()
  }

  public async getFiveDaysWeather(cityCode) {
    try {
      const resp = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityCode}?apikey=${KEY}`)
      return resp.data.DailyForecasts
    }
    catch (err) {
      throw err
    }
  }

  public addToFavorites(city: any) {
    if (!localStorage.getItem('favoriteCities')) {
      favoriteCities.push(city)
      localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities))
    }
    else {
      favoriteCities.push(city)
      localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities))
    }
  }

}
