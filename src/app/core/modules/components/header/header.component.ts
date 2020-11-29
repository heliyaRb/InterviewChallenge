import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: string[] = [
    'خرید',
    'رهن و اجاره',
    'جستجو روی نقشه',
    'سپردن ملک',
    'قیمت خانه‌ی شما',
    'اطلاعات بازار',
    'آژانس‌های املاک',
    'تبلیغات',
  ];

  constructor() {}

  ngOnInit(): void {}
}
