import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../services/booking';

interface RoomFeature {
  icon: string;
  text: string;
}

interface Room {
  id: string;
  title: string;
  description: string;
  images: string[];
  leftFeatures: RoomFeature[];
  rightFeatures: RoomFeature[];
  currentIndex: number;
  tourUrl?: string;
}

@Component({
  selector: 'opt-rooms',
  imports: [CommonModule],
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss',
})
export class RoomsComponent {
  readonly bookingUrl = 'https://optimahotels.com.ua/uk/hotels/kamianets-podilsky/rooms/';
  booking = inject(BookingService);

  rooms: Room[] = [
    {
      id: 'standard-twin',
      title: 'Стандарт Twin',
      description: '2 односпальних ліжка (900×2000) або 1 двомісне (1800×2000), міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, Wi-Fi, система клімат-контролю, шафа, ванна кімната з ванною.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-dd1c225d-470c-4028-b2dc-33c6eb332358.jpg', 
      'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-21d4cd6e-5076-46fb-b0af-bd56c4c1bb7d.jpg'],
      leftFeatures: [
        { icon: 'fas fa-key', text: '12 номерів у готелі' },
        { icon: 'fas fa-bed', text: '1 додаткове місце' },
        { icon: 'fas fa-ruler-combined', text: '20–30 м²' },
        { icon: 'fas fa-bed', text: '2 односпальних або 1 двоспальне' },
      ],
      rightFeatures: [
        { icon: 'fas fa-users', text: '2 основних місця' },
        { icon: 'fas fa-bath', text: 'ванна' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
    {
      id: 'standard-double',
      title: 'Стандарт Double',
      description: '1 двоспальне ліжко (1600×2000), міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, шафа, система клімат-контролю, ванна кімната з ванною або душовою кабіною.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-ebd99e34-e3f4-4579-a769-1aaeaedcb299.jpg',
         'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-7fcd6cda-2677-43f8-94ee-f897a29fb4ea.png'],
      leftFeatures: [
        { icon: 'fas fa-key', text: '12 номерів у готелі' },
        { icon: 'fas fa-ruler-combined', text: '17–23,8 м²' },
        { icon: 'fas fa-bed', text: '1 двоспальне ліжко' },
        { icon: 'fas fa-bed', text: '1 додаткове місце' },
      ],
      rightFeatures: [
        { icon: 'fas fa-users', text: '2 основних місця' },
        { icon: 'fas fa-shower', text: 'душ' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
    {
      id: 'superior-twin',
      title: 'Суперіор Twin',
      description: '2 односпальні ліжка (900×2000), міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, шафа, журнальний столик, балкон, Wi-Fi, система клімат-контролю, ванна кімната з душовою кабіною.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-b67a9a51-bf90-4054-b9fc-d4876c9d6568.jpg', 
        'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-13e81899-da23-4aa1-a975-adce58eaaa1a.jpg'],
      leftFeatures: [
        { icon: 'fas fa-bed', text: '1 додаткове місце' },
        { icon: 'fas fa-ruler-combined', text: '23 м²' },
        { icon: 'fas fa-key', text: '2 номери у готелі' },
        { icon: 'fas fa-bed', text: '2 односпальні ліжка' },
      ],
      rightFeatures: [
        { icon: 'fas fa-users', text: '2 основних місця' },
        { icon: 'fas fa-shower', text: 'душ' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
    {
      id: 'superior-twin-accessible',
      title: 'Суперіор Twin (для маломобільних гостей)',
      description: 'Номер адаптований для комфортного перебування маломобільних гостей. У номері передбачено 2 односпальні ліжка 900×2000, міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, шафу, журнальний столик, балкон, Wi-Fi та систему клімат-контролю. Ванна кімната обладнана душовою кабіною, поручнями біля унітаза та в душовій зоні, а також відкидним сидінням у душі. Душова зона виконана на рівні підлоги, санвузол має безбар\'єрний доступ без порогів. Вхід до готелю обладнаний пандусом.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-7d3bfb4e-64a6-444c-a589-2943499457c8.jpg', 
        'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-cd67ae5c-bcec-4dd5-af50-5e9938770f71.jpg'],
      leftFeatures: [
        { icon: 'fas fa-bed', text: '1 додаткове місце' },
        { icon: 'fas fa-ruler-combined', text: '23 м²' },
        { icon: 'fas fa-bed', text: '2 односпальні ліжка' },
        { icon: 'fas fa-users', text: '2 основних місця' },
      ],
      rightFeatures: [
        { icon: 'fas fa-wheelchair', text: 'для маломобільних гостей' },
        { icon: 'fas fa-shower', text: 'душ' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
    {
      id: 'superior-double',
      title: 'Суперіор Double',
      description: '1 двоспальне ліжко (1600×2000), міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, шафа, журнальний столик, балкон, Wi-Fi, система клімат-контролю, ванна кімната з ванною.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-f049465a-a9e6-44d4-ae17-0e21a85db062.jpg', 
        'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-5f689263-3932-42ca-8c65-756ede620075.jpg'],
      leftFeatures: [
        { icon: 'fas fa-bed', text: '1 двоспальне ліжко' },
        { icon: 'fas fa-ruler-combined', text: '20,5–27 м²' },
        { icon: 'fas fa-bed', text: '2 додаткових місця' },
        { icon: 'fas fa-users', text: '2 основних місця' },
      ],
      rightFeatures: [
        { icon: 'fas fa-key', text: '6 номерів у готелі' },
        { icon: 'fas fa-bath', text: 'ванна' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
    {
      id: 'semi-lux-double',
      title: 'Напівлюкс Double',
      description: '1 двоспальне ліжко (1800×2000), міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, диван, журнальний стіл, шафа, балкон, банні халати, Wi-Fi, система клімат-контролю, ванна кімната з ванною.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-7c8fddfc-1738-4ead-8525-2fc885af0cdd.jpg', 
        'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-8fb16518-49be-4428-a54b-56bc7db1d00d.jpg'],
      leftFeatures: [
        { icon: 'fas fa-bed', text: '1 двоспальне ліжко' },
        { icon: 'fas fa-users', text: '2 основних місця' },
        { icon: 'fas fa-ruler-combined', text: '31–52 м²' },
        { icon: 'fas fa-bed', text: '3 додаткових місця' },
      ],
      rightFeatures: [
        { icon: 'fas fa-key', text: '3 номери у готелі' },
        { icon: 'fas fa-bath', text: 'ванна' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
    {
      id: 'lux-double',
      title: 'Люкс Double',
      description: 'Двокімнатний номер. Житлова площа 42–42,2 кв.м. 1 двоспальне ліжко (2000×2000), міні-бар, міні-сейф, фен, телевізор, телефон, робочий стіл, тумба під багаж, диван і два крісла, журнальний столик, шафа, чотири балкони, банні халати, Wi‑Fi, система клімат-контролю, ванна кімната з ванною і душовою кабіною.',
      images: ['https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-87cb9181-0b17-4b5e-9c9a-09e5cb738e62.jpg', 
        'https://optimahotels.com.ua/media/images/rooms/hotelroomphoto-9e70de30-838f-4643-82eb-1a15197aaacd.jpg'],
      leftFeatures: [
        { icon: 'fas fa-bed', text: '1 двоспальне ліжко' },
        { icon: 'fas fa-users', text: '2 основних місця' },
        { icon: 'fas fa-key', text: '3 номери у готелі' },
        { icon: 'fas fa-bed', text: '4 додаткових місця' },
      ],
      rightFeatures: [
        { icon: 'fas fa-ruler-combined', text: '52–63 м²' },
        { icon: 'fas fa-bath', text: 'ванна' },
        { icon: 'fas fa-shower', text: 'душ' },
        { icon: 'fas fa-mug-hot', text: 'сніданок включений' },
      ],
      currentIndex: 0,
    },
  ];

  get checkinDate(): string {
    const d = new Date();
    return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  get checkoutDate(): string {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return `${String(d.getDate()).padStart(2, '0')}.${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  prevImage(room: Room): void {
    room.currentIndex = (room.currentIndex - 1 + room.images.length) % room.images.length;
  }

  nextImage(room: Room): void {
    room.currentIndex = (room.currentIndex + 1) % room.images.length;
  }
}
