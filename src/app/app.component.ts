import { Component } from '@angular/core';
import { Ball } from './interfaces/ball';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedBalls: Ball[] =  [
    {
      number: 1,
      color: "#FF0000"
    },
    {
      number: 2,
      color: "#90EE90"
    },
    {
      number: 3,
      color: "#008000"
    },
    {
      number: 4,
      color: "#FF69B4"
    },
    {
      number: 5,
      color: "#DAA520"
    },
    {
      number: 6,
      color: "#FFF000"
    },
    {
      number: 7,
      color: "#800000"
    },
  ]
}
