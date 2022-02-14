import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BallSelectorComponent } from './ball-selector.component';

describe('BallSelectorComponent', () => {
  let component: BallSelectorComponent;
  let fixture: ComponentFixture<BallSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallSelectorComponent);
    component = fixture.componentInstance;
    component.resultMsg = {text: 'test', color: 'test'}
    component.balls = [{
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
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display balls equal to number of elements', () => {
    const balls = fixture.debugElement.queryAll(By.css('.ball'));
    expect(balls.length).toBe(3);
  });

  it('should display winner ball if exists', () => {
    component.winnerBall = {
      number: 3,
      color: "#008000"
    };
    fixture.detectChanges()

    const balls = fixture.debugElement.query(By.css('.balls-row'))
    expect(balls).toBeFalsy();
    const winnerBall = fixture.debugElement.queryAll(By.css('.result-display'))
    expect(winnerBall.length).toBeGreaterThan(0);
  });
});
