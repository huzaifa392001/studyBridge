import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    cities: any = this.route.snapshot.data['searchresolver'];

    // @Output() data: any;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        console.log(this.cities);

    }

}
