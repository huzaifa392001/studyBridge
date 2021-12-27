import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

declare var $: any;
@Component({
    selector: 'app-portal',
    templateUrl: './portal.component.html',
    styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit, AfterViewInit {

    navActive:any ={};
    active = false;
    constructor(
        private _vps: ViewportScroller
    ) { }

    ngOnInit(): void {
    }

    scrollFn(anchor: string): void {
        this._vps.scrollToAnchor(anchor);
        this.navActive[anchor] = anchor;
    }

    ngAfterViewInit() {
        $('.ui.accordion').accordion();
    }

    sidemenu() {
        this.active = !this.active;
    }
}
