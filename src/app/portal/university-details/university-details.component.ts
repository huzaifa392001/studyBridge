import { Component, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-university-details',
    templateUrl: './university-details.component.html',
    styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

    uniDetails: any = this.route.snapshot.data['universityresolver'];

    constructor(
        private location: Location,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        console.log(this.uniDetails);

    }

    back() {
        this.location.back()
    }

}
