import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'opt-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class GalleryComponent {
  galleryImages = [
    'image/5.png',
    'image/6.png',
    'image/7.png',
    'image/8.png',
    'image/9.png',
    'image/10.png',
    'image/11.png',
    'image/13.png'
  ];
}
