import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-thanks',
    templateUrl: './thanks.component.html',
    styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent implements OnInit {

    constructor(
        public ngxSmartModalService: NgxSmartModalService,
    ) { }

    ngOnInit(): void {
        console.log("popup opened");

    }

}
