import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.scss']
})
export class WeatherPreviewComponent implements OnInit {
  @Input() dailyForecast: any
  constructor() { }

  ngOnInit(): void {
  }

  getCurrentDate = (time:number) => {
    var date = new Date(0)
    date.setUTCSeconds(time)
    return this.daysToSrting(date.getDay())
  }
  daysToSrting = (today:number) => {
    const daysOfWeek:string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[today]
  }

   setIcon = (icon:number) => {
    return (icon < 10) ? `0${icon}` : icon
}
fToC = (tempature:number) => {
  return ((tempature - 32) * 5 / 9).toFixed(0);
}


}
