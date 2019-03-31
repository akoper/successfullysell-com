import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Company} from './interface/company';
import {HttpErrorHandler, HandleError} from './http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    companyUrl = '/company';
    handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('CompanyService');
    }

    /** GET companies from the server */
    getCompanies(): Observable<Company[]> {
        console.log('company service GET companies hit');
        return this.http.get<Company[]>(this.companyUrl)
            .pipe(catchError(this.handleError('getCompanies', [])));
    }

    /** POST: add a new company to the database */
    addCompany(company: Company): Observable<Company> {
        console.log('company service POST hit');
        return this.http.post<Company>(this.companyUrl, company, httpOptions)
            .pipe(catchError(this.handleError('addCompany', company)));
    }

}
