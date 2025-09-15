import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimerCard } from './countdown-timer-card';

describe('CountdownTimerCard', () => {
  let component: CountdownTimerCard;
  let fixture: ComponentFixture<CountdownTimerCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownTimerCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimerCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
