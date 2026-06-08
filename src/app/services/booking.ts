import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BookingService {
  private http = inject(HttpClient);

  isOpen = signal(false);
  name = signal('');
  phone = signal('');
  sending = signal(false);
  sent = signal(false);
  error = signal('');

  open() {
    this.name.set('');
    this.phone.set('');
    this.sent.set(false);
    this.error.set('');
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
  }

  submit() {
    if (!this.name().trim() || !this.phone().trim()) return;

    this.sending.set(true);
    this.error.set('');

    const message = `Запит на бронювання з сайту Optima Collection\nІм'я: ${this.name()}\nТелефон: ${this.phone()}`;

    this.http.post('https://it.webart.work/api/telegram/contact', {
      slug: 'optima-collection',
      message
    }).subscribe({
      next: () => { this.sending.set(false); this.sent.set(true); },
      error: () => { this.sending.set(false); this.error.set('Помилка надсилання. Спробуйте ще раз.'); }
    });
  }
}
