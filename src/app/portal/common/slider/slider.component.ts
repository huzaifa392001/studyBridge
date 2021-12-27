import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    slides=[1,2,3,4,5,6,7,8,9,10]
    constructor() { }

    ngOnInit(): void {
    }

    config: SwiperOptions = {
        slidesPerView: 1,
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {

            769: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 25,
            }
        }
    };

    onSwiper(swiper: any) {
        console.log(swiper);
    }
    onSlideChange() {
        console.log('slide change');
    }

}
