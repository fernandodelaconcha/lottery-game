import { Component } from '@angular/core';
import { Balls } from './components/data/balls';
import { Ball } from './interfaces/ball';
import { ResultMessage } from './interfaces/result-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  totalBalls: Ball[] = Balls;

  selectedBalls: Ball[] =  []

  winnerBall: Ball | undefined;

  resultMsg!: ResultMessage;

  balance: number = 500;

  removeSelectedBall(ball: Ball) {
    this.selectedBalls.splice(this.selectedBalls.indexOf(ball), 1)
  }

  clearSelection() {
    this.selectedBalls = [];
    this.totalBalls = Balls;
    this.winnerBall = undefined;
  }

  selectBall(ball: Ball) {
    if (this.selectedBalls.indexOf(ball) == -1)
      this.selectedBalls.push(ball)
  }

  placeBet(totalAmount: number) {
    this.winnerBall = this.determineWinnerBall();
    if (this.selectedBalls.indexOf(this.winnerBall) > -1){
      this.resultMsg = {
        color: "green",
        text: `YOU WON: ${this.calculateWinnings(totalAmount)}€`
      };
      this.balance += this.calculateWinnings(totalAmount);
    } else {
      this.resultMsg = {
        color: "red",
        text: `YOU LOST: ${totalAmount}€`
      };
      this.balance -= totalAmount;
    }
  }

  determineWinnerBall(): Ball {
    let randomInt = Math.floor(Math.random() * (10));
    return this.totalBalls[randomInt];
  }

  calculateWinnings(totalAmount: number) {
    return totalAmount + totalAmount / this.selectedBalls.length * 1.5
  }
}
