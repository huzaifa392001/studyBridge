import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../service/http.service';

@Injectable({ providedIn: 'root' })

export class universityResolver implements Resolve<any> {

    constructor(
        private httpservice: HttpService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
        let id: any;
        return this.httpservice.get('course/', id);
    }
}
