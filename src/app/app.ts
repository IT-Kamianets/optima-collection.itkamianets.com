import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { RoomsComponent } from './components/rooms/rooms';
import { GalleryComponent } from './components/gallery/gallery';
import { LocationComponent } from './components/location/location';
import { ThemeService } from './services/theme';
import { BookingService } from './services/booking';

@Component({
  selector: 'opt-app',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    RoomsComponent,
    GalleryComponent,
    LocationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'optima-collection';
  booking = inject(BookingService);
  constructor(private themeService: ThemeService) {}
}
