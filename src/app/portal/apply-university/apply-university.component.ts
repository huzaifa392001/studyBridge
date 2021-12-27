import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'

@Component({
    selector: 'app-apply-university',
    templateUrl: './apply-university.component.html',
    styleUrls: ['./apply-university.component.scss']
})
export class ApplyUniversityComponent implements OnInit {

    congo = false;

    @Output() buttonClicked = new EventEmitter();
    constructor(
        private location: Location
    ) { }

    ngOnInit(): void {
    }

    back() {
        this.location.back()
    }

    callPopup(event: any) {
        this.congo = true;
    }

    hideCongo() {
        this.congo = false
    }
}
