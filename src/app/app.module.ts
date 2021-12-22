import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';
import {  WeatherListComponent} from './cmps/weather/weather-list/weather-list.component';
import { WeatherPreviewComponent } from './cmps/weather/weather-preview/weather-preview.component';
import {  WeatherFilterComponent} from './cmps/weather/weather-filter/weather-filter.component';
import { FavoriteListComponent } from './cmps/favorites/favorite-list/favorite-list.component';
import { FavoritePreviewComponent } from './cmps/favorites/favorite-preview/favorite-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    WeatherAppComponent,
    WeatherListComponent,
    WeatherPreviewComponent,
    WeatherFilterComponent,
    FavoriteListComponent,
    FavoritePreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
