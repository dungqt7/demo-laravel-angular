import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   sever = 'http://localhost:8000/';
   headers: Headers = new Headers;
   options: any;
  constructor(private http: Http) {
    this.headers.append('enctype', 'multipart/form-data');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-Requested-With', 'XMLHttpRequest');
    this.options = new RequestOptions({headers: this.headers});
  }
  addProfile(info) {
    const data = JSON.stringify(info);
    return this.http.post(this.sever + 'addprofile', data, this.options).pipe(map(res => res.json));
  }
}
