import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from '../../company.service';
import {Company} from '../../interface/company';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.sass']
})
export class CompanyComponent implements OnInit {

    company: Company;

    constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    }

    ngOnInit() {
        this.getCompany(this.route.snapshot.params['id']);
    }

    getCompany(id: string) {
        this.companyService.getCompany(id).subscribe(
            company => {
                this.company = company;
            },
            (err) => {
                console.log(err);
            },
            () => console.log('companyComponent.ts, getCompany().subscribe() callback hit')
        );
    }

}
