import { Component, Input, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, SwiperOptions } from 'swiper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
    selector: 'app-universities',
    templateUrl: './universities.component.html',
    styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {

    @Input() data: any;
    env = environment;


    constructor(
    private sanitizer: DomSanitizer,
    ) { }

    ngOnInit(): void {
        console.log(this.data);
    }

    sanitizeImageUrl(imageUrl: string): SafeUrl {
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }

    config: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: true,
        pagination: { clickable: true },
        breakpoints: {
            1200: {
                slidesPerView: 4,
                spaceBetween: 25,
            },

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
