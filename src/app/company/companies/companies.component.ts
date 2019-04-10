import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../company.service';
import { Company } from '../../interface/company';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.sass']
})
export class CompaniesComponent implements OnInit {

  companies: any;
  company: Company;

  constructor(private companyService: CompanyService, private router: Router) { }

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

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(
      res => {
        this.companies = res;
        // this.router.navigate(['/companies']);
      }, err => {
        console.log(err);
      }, () => {
        console.log('companiesComponent.ts, deleteCompany().subscribe() callback called');
      });
  }

}
