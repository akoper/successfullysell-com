import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {CompanyService} from '../../company.service';

@Component({
    selector: 'app-company-create',
    templateUrl: './company-create.component.html',
    styleUrls: ['./company-create.component.sass']
})
export class CompanyCreateComponent implements OnInit {

    angForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private companyService: CompanyService) {
        this.createForm();
    }

    createForm() {
        this.angForm = this.formBuilder.group({
            name: ['', Validators.required],
            industry: ['', Validators.required],
            phone: ['', Validators.required],
            street: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip_code: ['', Validators.required]
        });
    }

    addCompany() {
        console.log(this.angForm.value);
        this.companyService.addCompany(this.angForm.value);
    }

    ngOnInit() {
    }

}
