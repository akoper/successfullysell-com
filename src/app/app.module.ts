import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BookComponent} from './book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {CompanyCreateComponent} from './company/company-create/company-create.component';
import {HomepageComponent} from './homepage/homepage.component';
import {PersonCreateComponent} from './person/person-create/person-create.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CompanyService} from './company.service';
import {HttpErrorHandler} from './http-error-handler.service';
import {CompanyComponent} from './company/company/company.component';
import {CompaniesComponent} from './company/companies/companies.component';

@NgModule({
    declarations: [
        AppComponent,
        BookComponent,
        BookDetailComponent,
        BookCreateComponent,
        BookEditComponent,
        CompanyCreateComponent,
        HomepageComponent,
        PersonCreateComponent,
        CompanyComponent,
        CompaniesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        CompanyService,
        HttpErrorHandler,
        {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
