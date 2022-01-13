import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

declare var $: any

@Component({
    selector: 'app-search-main',
    templateUrl: './search-main.component.html',
    styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit, AfterViewInit {

    @Input() data: any ;
    courses: any = false;
    searchForm!: FormGroup;
    env = environment;
    suggestion: any;

    @ViewChildren('dropdown') elDropdown!: QueryList<ElementRef>;
    constructor(
        private fb: FormBuilder,
        private httpservice: HttpService,
        private sanitizer: DomSanitizer,
    ) { }

    ngOnInit(): void {
        this.form();
        console.log(this.data);
    }

    ngAfterViewInit() {
        this.elDropdown.changes.subscribe(item => {
            if (this.elDropdown.length) {
                this.elDropdown.forEach((element, ind) => {
                    $(element.nativeElement).dropdown();
                });
            }
        });
    }

    form() {
        this.searchForm = this.fb.group({
            c: [''],
            d: [''],
            lang: [''],
        });
    }

    search() {
        if (this.searchForm.valid) {
            this.httpservice.post("search-courses", this.searchForm.value).subscribe((res: any) => {
                this.courses = true;
                console.log(res);
                if (res.courses.length > 0) {
                    this.courses = res.courses;
                    console.log(this.courses);
                }
            })
        }
    }

    sanitizeImageUrl(imageUrl: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
}
