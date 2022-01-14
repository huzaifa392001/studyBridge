import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    tiles = [
        {
            'icon': 'mortarboard 1.png',
            'name': 'Degree',
            'sub': 'Bachelor Degree'
        },
        {
            'icon': 'Group-1.png',
            'name': 'Location',
            'sub': 'Seoul, South Korea'
        },
        {
            'icon': 'Group-2.png',
            'name': 'Next Semester',
            'sub': 'September 01'
        },
        {
            'icon': 'Group.png',
            'name': 'Tuition Fee',
            'sub': '5.1mln / Semester'
        },
        {
            'icon': 'Group-3.png',
            'name': 'Study Period',
            'sub': '8 Semester'
        },
        {
            'icon': 'Group-4.png',
            'name': 'Language',
            'sub': 'English'
        },
    ]

    @Input() data :any;

    constructor() { }

    ngOnInit(): void {
        console.log(this.data);

    }

}
