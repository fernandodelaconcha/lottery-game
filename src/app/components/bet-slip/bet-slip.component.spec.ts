import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BetSlipComponent } from './bet-slip.component';

describe('BetSlipComponent', () => {
  let component: BetSlipComponent;
  let fixture: ComponentFixture<BetSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetSlipComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetSlipComponent);
    component = fixture.componentInstance;
    component.balance = 500
      component.selectedBalls = [{
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

  it ('should show unselected balls depending on the selected ones', () => {
    expect(component.getUnselectedBalls().length).toBe(7);
  })

  it ('should show unselected balls depending on the selected ones', () => {
    const balls = fixture.debugElement.queryAll(By.css('.balls-row [disabled]'));
    expect(balls.length).toBe(7);
  })

  it ('should show disable bet button if there is no bet', () => {
    component.totalBetValue = 0;
    const button = fixture.debugElement.query(By.css('.bet-button')).nativeElement;
    expect(button.disabled).toBeTruthy();
  })
});
