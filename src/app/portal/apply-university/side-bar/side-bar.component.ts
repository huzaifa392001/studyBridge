import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HttpService } from 'src/app/service/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
    contact!: FormGroup;

    constructor(
        private fb: FormBuilder,
        public ngxSmartModalService: NgxSmartModalService,
        public httpservice: HttpService
    ) { }

    ngOnInit(): void {
        this.form();
    }

    form() {
        this.contact = this.fb.group({
            course_id:[1],
            course_package_id:[1],
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
            phone: [, Validators.required]
        });
    }

    contactForm() {
        if (this.contact.value) {
            this.httpservice.post("contact-us", this.contact.value).subscribe((res: any) => {
                this.ngxSmartModalService.getModal('popupOne').open()
                console.log(this.contact.value);

            })
        }
    }
}
