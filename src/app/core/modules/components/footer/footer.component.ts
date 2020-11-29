import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  footerData: { title: string; links: string[] }[];
  constructor() {}

  ngOnInit(): void {
    this.footerData = [
      {
        title: 'کلید',
        links: [
          'درباره کیلید',
          'بلاگ',
          'تماس با ما',
          ' فرصت‌های شغلی',
          'آژانس های املاک',
          'تبلیغات',
        ],
      },
      {
        title: 'جستجو',
        links: ['خرید', 'رهن و اجاره', 'چستجو روی نقشه', 'سپردن ملک'],
      },
      {
        title: 'اطلاعات کیلیدی',
        links: ['قیمت خانه شما', 'فرصت های بازار مسکن'],
      },
      {
        title: 'اپلیکیشن',
        links: ['مشاورین (iOS, Android) ', 'کاربران (iOS, Android)'],
      },
    ];
  }
}
