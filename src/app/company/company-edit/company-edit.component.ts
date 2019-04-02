import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/interface/company';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-company-edit',
    templateUrl: './company-edit.component.html',
    styleUrls: ['./company-edit.component.sass']
})
export class CompanyEditComponent implements OnInit {

    company: Company;
    editForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {}

    ngOnInit() {
        // this.getCompany(this.route.snapshot.params['id']);
        // console.log('Id is ' + this.route.snapshot.params['id']);
        this.editForm = this.formBuilder.group({
            _id: ['', Validators.required],
            name: ['', Validators.required],
            industry: ['', Validators.required],
            phone: ['', Validators.required],
            street: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip_code: ['', Validators.required],
            updated_date: [''],
            __v: ['']
        });

        this.companyService.getCompany(this.route.snapshot.params['id']).subscribe(
            data => this.editForm.setValue(data)
            ,
            (err) => {
                console.log(err);
            },
            () => console.log('companyEditComponent.ts, getCompany().subscribe() callback hit')
        );
    }

    updateCompany() {
        this.companyService.updateCompany(this.editForm.value).subscribe(
            res => {
                this.router.navigate(['/companies']);
            },
            (err) => {
                console.log(err);
            },
            () => console.log('companyEditComponent.ts, updateCompany().subscribe() callback hit')
        );
    }

}
