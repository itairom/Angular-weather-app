import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
// import { WeatherService } from 'src/app/services/weather.service.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.scss']
})
export class WeatherAppComponent implements OnInit {
  @Input() onFilter: any
  weather: any
  citySearch: string
  currCity: any
  cityWeather: any

  constructor(
    private weatherService: WeatherService,
    private storageService: StorageService
    
  ) {
    this.citySearch = ''
    this.currCity = ''
    this.cityWeather = []
  }

  async ngOnInit(): Promise<void> {
    const cityStorage = this.storageService.loadFromStorage('cityWeather')
    if (cityStorage) {
      this.cityWeather = cityStorage
    }
    else {
      this.cityWeather = await this.weatherService.getFiveDaysWeather(215854)
      this.storageService.saveToStorage('cityWeather', this.cityWeather)
    }
    
  }
  async onSetFilter(city: any) {
    this.currCity = city
    this.cityWeather = await this.weatherService.getFiveDaysWeather(this.currCity.Key)
    this.storageService.saveToStorage('cityWeather', this.cityWeather)
  }


}
