import { Component } from '@angular/core';
import { CountdownTimer } from "../countdown-timer/countdown-timer";
import { Socials } from '../socials/socials';

@Component({
  selector: 'app-maintenance',
  imports: [CountdownTimer, Socials],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css'
})
export class Maintenance {

}
