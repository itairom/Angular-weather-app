import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: any
  constructor(
    private storageService: StorageService
  ) {
    this.favorites = storageService.loadFromStorage('favoriteCities')
  }

  ngOnInit(): void {
  }

}
