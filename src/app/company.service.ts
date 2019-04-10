import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Company } from './interface/company';
import { HttpErrorHandler, HandleError } from './http-error-handler.service';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class CompanyService {

    company: Company;
    companyUrl = '/company';
    handleError: HandleError;

    constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
        this.handleError = httpErrorHandler.createHandleError('CompanyService');
    }

    /** GET a company from the database */
    getCompany(id: string): Observable<any> {
        console.log('company service GET company id hit');
        const url = `${this.companyUrl}/${id}`;
        return this.http.get(url, httpOptions).pipe(
            map(this.extractData),
            catchError(this.handleError('getCompany', [])));
    }

    /** GET companies from the database */
    getCompanies(): Observable<Company[]> {
        console.log('company service GET companies hit');
        return this.http.get<Company[]>(this.companyUrl)
            .pipe(catchError(this.handleError('getCompanies', [])));
    }

    /** POST: add company to the database */
    addCompany(company: Company): Observable<Company> {
        console.log('company service POST hit');
        return this.http.post<Company>(this.companyUrl, company, httpOptions)
            .pipe(catchError(this.handleError('addCompany', company)));
    }

    /** PUT: update the company on the database. Returns the updated company upon success. */
    updateCompany(company: Company): Observable<Company> {
        const url = `${this.companyUrl}/${company._id}`;
        return this.http.put<Company>(url, company, httpOptions)
            .pipe(catchError(this.handleError('updateCompany', company)));
    }

    /** DELETE: delete the company from the database */
    deleteCompany(id: string): Observable<any> {
        const url = `${this.companyUrl}/${id}`; // DELETE api/heroes/42
        return this.http.delete(url, httpOptions)
            .pipe(catchError(this.handleError('deleteHero')));
    }

    private extractData(res: Response) {
        const body = res;
        return body || {};
    }

}
