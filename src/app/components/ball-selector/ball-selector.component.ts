import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ball } from 'src/app/interfaces/ball';
import { ResultMessage } from 'src/app/interfaces/result-message';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  @Output()
  clickBall = new EventEmitter<Ball>();

  @Output()
  clickClear = new EventEmitter<void>();

  @Input()
  balls!: Ball[];

  @Input()
  winnerBall: Ball | undefined;

  @Input()
  resultMsg!: ResultMessage;

  constructor() { }


  ngOnInit(): void {
  }

  onClickBall(ball: Ball){
    this.clickBall.emit(ball);
  }

  onClickClear(){
    this.clickClear.emit();
  }
}
