import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null;
  }

  public saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
  }
}
