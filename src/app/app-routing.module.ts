import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {CompanyCreateComponent} from './company/company-create/company-create.component';
import {PersonCreateComponent} from './person/person-create/person-create.component';
import {CompaniesComponent} from './company/companies/companies.component';
import {CompanyEditComponent} from './company/company-edit/company-edit.component';
import {CompanyComponent} from './company/company/company.component';
import {LoginComponent} from './user/login/login.component';
import {ProfileComponent} from './user/profile/profile.component';
import {RegisterComponent} from './user/register/register.component';
import {AuthGuardService} from './auth-guard.service';

const routes: Routes = [
        {
            path: 'person/create',
            component: PersonCreateComponent,
            data: {title: 'Create Person'}
        },
        {
            path: 'company/create',
            component: CompanyCreateComponent,
            data: {title: 'Company Create'}
        },
        {
            path: 'companies',
            component: CompaniesComponent,
            data: {title: 'Companies'}
        },
        {
            path: 'company-edit/:id',
            component: CompanyEditComponent,
            data: {title: 'Company Edit'}
        },
        {
            path: 'company/:id',
            component: CompanyComponent,
            data: {title: 'Company'}
        },
        {
            path: '',
            component: HomepageComponent,
            data: {title: 'successfullysell.com'}
        },
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        },
        {
            path: 'profile',
            component: ProfileComponent,
            canActivate: [AuthGuardService]
        }
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
