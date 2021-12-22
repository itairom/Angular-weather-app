import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
@Input () favorites:any;
  constructor() { }

  ngOnInit(): void {
  }

}
