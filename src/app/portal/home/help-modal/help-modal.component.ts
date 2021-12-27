import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-help-modal',
    templateUrl: './help-modal.component.html',
    styleUrls: ['./help-modal.component.scss']
})
export class HelpModalComponent implements OnInit {
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
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')]],
            message: [, Validators.required]
        });
    }

    contactForm() {
        if (this.contact.value) {
            this.ngxSmartModalService.getModal('popupTwo').close()
            this.ngxSmartModalService.getModal('popupThree').open()
                this.httpservice.post("help-us", this.contact.value).subscribe((res: any) => {
                console.log(this.contact.value);
            })
        }
    }

}
