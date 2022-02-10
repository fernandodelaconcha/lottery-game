import { Component, Input, OnInit } from '@angular/core';
import { Ball } from 'src/app/interfaces/ball';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  constructor() { }

  @Input()
  selectedBalls: Ball[] = []

  betValue!: number;

  totalBetValue!: number;

  ngOnInit(): void {
  }

  getUnselectedBalls(): Array<number>{
    return Array(10 - this.selectedBalls.length)
  }

  calculateTotalBetValue(){
    this.totalBetValue = this.betValue * this.selectedBalls.length;
  }

}
