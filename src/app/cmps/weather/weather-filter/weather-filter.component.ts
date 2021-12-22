import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'weather-filter',
  templateUrl: './weather-filter.component.html',
  styleUrls: ['./weather-filter.component.scss']
})
export class WeatherFilterComponent implements OnInit {

  @Input() filterBy: string
  @Output() onFilter = new EventEmitter<string>()

  cities: string[]
  search: string = ''
  currCity: any;

  constructor(
    private weatherService: WeatherService,
    private storageService: StorageService
  ) {
    this.cities = []
    this.currCity = storageService.loadFromStorage('currCity')
  }

  async handleChange(search) {
    const fetchCityList = await this.weatherService.getCityList(search)
    this.storageService.saveToStorage('cityList', fetchCityList)
    this.cities = fetchCityList
  }

  setCurrCiy(city: string) {
    this.storageService.saveToStorage('currCity', city)
    this.onFilter.emit(city)
    this.cities = []
    this.currCity = this.storageService.loadFromStorage('currCity')
    this.search = ''
  }

  onAddTofavorits(){
    alert('Add to favorites')
    this.weatherService.addToFavorites(this.currCity)
  }

  ngOnInit(): void {
  }

}
