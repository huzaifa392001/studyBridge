import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

    slides=[1,2,3,4,5,6,7,8]
  constructor() { }

  ngOnInit(): void {
  }

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
    navigation: true,
    pagination: { clickable: true },
  };

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
