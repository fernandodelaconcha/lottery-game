import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ball } from 'src/app/interfaces/ball';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.css']
})
export class BetSlipComponent implements OnInit {

  constructor() { }

  @Input()
  selectedBalls: Ball[] = [];

  @Input()
  balance!: number;

  @Output()
  clickBall = new EventEmitter<Ball>();

  @Output()
  placeBet = new EventEmitter<number>();

  betValue!: number;

  totalBetValue: number = 0;

  ngOnInit(): void {
  }

  getUnselectedBalls(): Array<number>{
    return Array(10 - this.selectedBalls.length)
  }

  calculateTotalBetValue(){
    if (this.betValue)
    this.totalBetValue = this.betValue * this.selectedBalls.length;
  }

  onClickBall(ball: Ball){
    this.clickBall.emit(ball);
  }

  onClickPlaceBet(){
    this.placeBet.emit(this.totalBetValue);
  }

}
