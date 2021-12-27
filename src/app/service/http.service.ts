import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  post(serviceName:any, data: any){
    const headers = new HttpHeaders();
    const options = { headers, withCredintials: false };
    const url = environment.apiUrl + serviceName;

    return this.http.post(url, data, options);
  }
  get(serviceName:any, data?: any){
    const header = new HttpHeaders();
    const options = {headers: header, withCredintials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.get(url, options);
  }

  getLive(serviceName:any, data?: any){
    const header = new HttpHeaders();
    const options = {headers: header, withCredintials: false};
    const url =  serviceName;

    return this.http.get(url, options);
  }

  put(serviceName:any, data: any){
    const header = new HttpHeaders();
    const options = {headers: header, withCredintials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.get( url ,  options);
  }
  delete(serviceName:any, data: any){
    const header = new HttpHeaders();
    const options = {headers: header, withCredintials: false};
    const url = environment.apiUrl + serviceName;

    return this.http.get( url ,  options);
  }
}
