import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer-card',
  imports: [],
  templateUrl: './countdown-timer-card.html',
  styleUrl: './countdown-timer-card.scss',
  animations: [
    trigger('flip', [
      transition('* => 1', [
        query('.flip', [animate('300ms linear', style({ transform: 'rotateX(-180deg)' }))]),
      ]),
    ]),
  ],
})
export class CountdownTimerCard implements OnInit {
  @Input() value!: number;
  @Input() label!: string;
  previousValue!: number;

  ngOnInit(): void {
    this.previousValue = this.value;
  }
}
