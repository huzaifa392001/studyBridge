import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    // course: any = this.route.snapshot.data['homeresolver'].unis;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        // console.log(this.course);

    }

}
