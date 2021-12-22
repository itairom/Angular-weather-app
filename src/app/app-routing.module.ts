import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WeatherAppComponent } from './pages/weather-app/weather-app.component';

const routes: Routes = [
  {
    path: '', component: WeatherAppComponent
  },
  {
    path: 'favorites', component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
