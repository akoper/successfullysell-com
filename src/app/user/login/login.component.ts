import {Component} from '@angular/core';
import {AuthenticationService, TokenPayload} from '../../authentication.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent {
    credentials: TokenPayload = {
        email: '',
        password: ''
    };

    constructor(private auth: AuthenticationService, private router: Router) {
    }

    login() {
        this.auth.login(this.credentials).subscribe(
        () => {
            this.router.navigateByUrl('/profile');
        }, (err) => {
            console.error(err);
        },
            () => console.log('loginComponent.ts, login().subscribe() callback hit')
        );
    }
}

