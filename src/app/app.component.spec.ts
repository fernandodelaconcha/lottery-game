import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BallSelectorComponent } from './components/ball-selector/ball-selector.component';
import { BetSlipComponent } from './components/bet-slip/bet-slip.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BetSlipComponent,
        BallSelectorComponent,
        AppComponent
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should modify balance when a bet is placed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedBalls = [{
        number: 8,
        color: '#4169E1',
      }];
    app.winnerBall = {number: 3,color: "#008000"}
    app.balance = 500
    app.placeBet(20);
    expect(app.balance).toBe(480);
  });

  it('should modify balance when a bet is placed', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.selectedBalls = [{
        number: 8,
        color: '#test',
      }];
    app.balance = 500
    app.placeBet(20);
    expect(app.balance).toBe(480);
  });

});
