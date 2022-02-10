import { Component, OnInit } from '@angular/core';
import { Ball } from 'src/app/interfaces/ball';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  balls: Ball[] = [
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
    {
      number: 8,
      color: "#4169E1"
    },
    {
      number: 9,
      color: "#D2691E"
    },
    {
      number: 10,
      color: "#FF00FF"
    }
  ]

  constructor() { }


  ngOnInit(): void {
  }

}
