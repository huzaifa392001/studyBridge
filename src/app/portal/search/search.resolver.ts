
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../../service/http.service';

@Injectable({ providedIn: 'root' })

export class searchResolver implements Resolve<any> {

  constructor(
    private httpservice: HttpService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    const cities = new Promise((resolve,reject)=>{
        this.httpservice.get("cities").subscribe(res => resolve(res));
    })

    const depart = new Promise((resolve,reject)=>{
        this.httpservice.get("all-departs").subscribe(res => resolve(res));
    })


    return Promise.all([cities, depart]);
  }
}
