import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
    selector: 'app-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

    slides = [1, 2, 3, 4, 5]
    constructor() { }

    ngOnInit(): void {
    }

    config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: { clickable: true },
    };

    onSwiper(swiper: any) {
        console.log(swiper);
    }
    onSlideChange() {
        console.log('slide change');
    }

}
