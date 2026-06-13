import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductCard {
  title: string;
  price: string;
  image: string;
  tag: string;
}

interface WorkshopCard {
  title: string;
  schedule: string;
  image: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly products: ProductCard[] = [
    {
      title: 'Bình gốm men trắng',
      price: '320.000đ',
      image: 'assets/image/product/products_15_15yTrDMi.jpg',
      tag: 'Bán chạy'
    },
    {
      title: 'Ly gốm thủ công',
      price: '180.000đ',
      image: 'assets/image/product/products_21_zx4XcOtv.jpg',
      tag: 'Mới'
    },
    {
      title: 'Set trang trí bàn trà',
      price: '540.000đ',
      image: 'assets/image/product/products_24_7G0kIv62.jpg',
      tag: 'Quà tặng'
    }
  ];

  readonly workshops: WorkshopCard[] = [
    {
      title: 'Workshop nặn gốm cơ bản',
      schedule: 'Thứ 7 hằng tuần',
      image: 'assets/image/workshop/workshop_02_Yx0ge-ua.jpg'
    },
    {
      title: 'Vẽ men trên sản phẩm',
      schedule: 'Chủ nhật hằng tuần',
      image: 'assets/image/workshop/workshop_06_-aebrWVm.jpg'
    }
  ];
}
