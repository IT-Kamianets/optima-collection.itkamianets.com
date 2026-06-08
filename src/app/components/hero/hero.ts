import { Component, inject } from '@angular/core';
import { BookingService } from '../../services/booking';

@Component({
  selector: 'opt-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  booking = inject(BookingService);
}
