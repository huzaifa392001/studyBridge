import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

    @Input() data: any;
    courses: any = false;
    searchForm!: FormGroup;
    env = environment;
    suggestion: any;
    loader: any = false;

    @ViewChildren('dropdown') elDropdown!: QueryList<ElementRef>;
    constructor(
        private fb: FormBuilder,
        private httpservice: HttpService,
        private sanitizer: DomSanitizer,
    ) { }

    ngOnInit(): void {
        this.form();
        const mapped = Object.keys(this.data[1].departs).map(key => ({value: this.data[1].departs[key]}));

        console.log(mapped);
        this.data[1].departs = mapped;
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
            c: ['', Validators.required],
            d: [''],
            lang: [''],
        });
    }

    search() {
        if (this.searchForm.valid) {
            this.loader = true;
            this.httpservice.post("search-courses", this.searchForm.value).subscribe((res: any) => {
                this.courses = true;
                console.log(res);
                if (res.courses.length > 0) {
                    this.courses = res;
                    console.log(this.courses);
                    this.loader = false;
                }
                this.loader = false;
            })
        }
    }

    sanitizeImageUrl(imageUrl: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
}
