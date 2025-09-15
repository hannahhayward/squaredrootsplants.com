import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CountdownTimerCard } from '../countdown-timer-card/countdown-timer-card';
@Component({
  selector: 'app-countdown-timer',
  imports: [CountdownTimerCard],
  templateUrl: './countdown-timer.html',
  styleUrl: './countdown-timer.scss',
})
export class CountdownTimer implements OnInit, OnDestroy {
  @Input() launchDate: Date = new Date(2025, 9, 1);
  private subscription = new Subscription();
  days!: number;
  hours!: number;
  minutes!: number;
  seconds!: number;

  ngOnInit(): void {
    console.log(this.days);
    this.updateValues();
    console.log(this.launchDate);
    this.subscription = interval(1000).subscribe((x) => this.updateValues());
  }

  updateValues() {
    let currentDate = new Date();
    let delta = (this.launchDate.getTime() - currentDate.getTime()) / 1000;
    delta = Math.max(0, delta);

    this.days = Math.floor(delta / 86400);
    delta -= this.days * 86400;

    this.hours = Math.floor(delta / 3600) % 24;
    delta -= this.hours * 3600;

    this.minutes = Math.floor(delta / 60) % 60;
    delta -= this.minutes * 60;

    this.seconds = Math.floor(delta % 60);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
