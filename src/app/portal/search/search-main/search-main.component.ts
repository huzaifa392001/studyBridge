import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-search-main',
    templateUrl: './search-main.component.html',
    styleUrls: ['./search-main.component.scss']
})
export class SearchMainComponent implements OnInit {

    courses: any = false;
    searchForm!: FormGroup;
    env = environment;
    suggestion: any;
    constructor(
        private fb: FormBuilder,
        private httpservice: HttpService,
        private sanitizer: DomSanitizer,
    ) { }

    ngOnInit(): void {
        this.form();
        // this.httpservice.getLive("http://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=34a0fd76c36b12b0b18f14f9c3f22b54&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ").subscribe((res: any) => {
        //     console.log(res);
        // })
    }

    form() {
        this.searchForm = this.fb.group({
            city: [''],
            course: [''],
            lang: ['']
        });
    }

    search() {
        if (this.searchForm.valid) {
            this.httpservice.post("search-uni-courses", this.searchForm.value).subscribe((res: any) => {
                this.courses = true;
                if (res.value > 0) {
                    this.courses = res.courses;
                    this.suggestion = res.suggestion;
                    console.log(this.courses);
                }
            })
        }
    }

    sanitizeImageUrl(imageUrl: string): SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    }
}
