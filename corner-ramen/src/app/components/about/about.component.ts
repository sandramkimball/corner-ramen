import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() :void {
    this.getDay()
  }

  // this function gets today's day and highlights it on the hours schedule
  getDay(){
    var t = new Date().getDay()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let today = weekday[t]

    document.querySelector(`.info .${today}`)[0].style.fontWeight(650)
  }

}
