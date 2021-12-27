import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    unis: any = this.route.snapshot.data['homeresolver'].unis;

    @Output() data:any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
    ) { }


    ngOnInit(): void {
    }

}
