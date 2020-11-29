import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cities: { faName: string; cityId: number }[];
  cards: { icon: string; title: string; text: string; link: string }[];
  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { faName: 'تهران', cityId: 1 },
      { faName: 'کیش', cityId: 2 },
      { faName: 'یزد', cityId: 3 },
    ];

    this.cards = [
      {
        icon: 'b.svg',
        title: 'قیمت خانه شما',
        text:
          'سامانه ارزیابی هوشمند کیلید ابزاری است که به کمک آن می توانید قیمت خانه ی خود را تخمین بزنید. این سیستم مبتنی بر روش های پیچیده هوش مصنوعی بوده و قیمت خانه ی شما را به صورت خودکار محاسبه می کند.',
        link: '',
      },
      {
        icon: 'b.svg',
        title: 'سپردن خانه در کیلید',
        text:
          'با کیلید بدون حضور حتی یک مشاور خانه ی خود را به فروش برسانید. کیلید با ارائه یک پلت فرم جذاب و با کمک مشاوران املاک حرفه ای خود، ملک شما را به سرعت در اختیار متقاضیان قرار می دهد.',
        link: '',
      },
      {
        icon: 'b.svg',
        title: 'فرصت‌های بازار مسکن',
        text:
          'فرصت جایی مطرح می گردد که بتوان با کمک داده ها و اطلاعات موجود، برای آینده فرصت سازی کنیم. با اطلاعات دقیقی که در اختیارتان قرار می گیرد، با اطمینان بیشتری برای آینده سرمایه خود یک تصمیم درست بگیرید.',
        link: '',
      },
    ];
  }

  onCityChange(event) {}
}
