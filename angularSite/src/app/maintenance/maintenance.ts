import { Component } from '@angular/core';
import { CountdownTimer } from "../countdown-timer/countdown-timer";

@Component({
  selector: 'app-maintenance',
  imports: [CountdownTimer],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css'
})
export class Maintenance {

}
