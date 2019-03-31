import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../company.service';
import {Company} from '../../interface/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {

  companies: any;

  constructor(private companyService: CompanyService) { }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(
        res => {
          this.companies = res;
        }, err => {
          console.log(err);
        }, () => {
          console.log('companiesComponent.ts, getCompanies().subscribe() callback called');
        });
  }

}
