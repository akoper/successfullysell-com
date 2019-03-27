import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BookComponent} from './book/book.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CompanyCreateComponent} from './company/company-create/company-create.component';
import {PersonCreateComponent} from './person/person-create/person-create.component';

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
            path: 'books',
            component: BookComponent,
            data: {title: 'Book List'}
        },
        {
            path: 'book-details/:id',
            component: BookDetailComponent,
            data: {title: 'Book Details'}
        },
        {
            path: 'book-create',
            component: BookCreateComponent,
            data: {title: 'Create Book'}
        },
        {
            path: 'book-edit/:id',
            component: BookEditComponent,
            data: {title: 'Edit Book'}
        },
        {
            path: '',
            component: HomepageComponent,
            data: {title: 'successfullysell.com'}
        }

    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
