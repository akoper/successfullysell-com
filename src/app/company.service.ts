import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {}

  addCompany(data) {

    // const obj = {
    //   name: name,
    //   industry: industry,
    //   phone: phone,
    //   street: street,
    //   city: city,
    //   state: state,
    //   zip_code: zip_code
    // };

    // this.http.post(`${this.uri}/add`, obj)
    //     .subscribe(res => console.log('Done'));
  }

}
