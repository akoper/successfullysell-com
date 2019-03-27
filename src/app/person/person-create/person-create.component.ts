import {Component, OnInit} from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonService} from '../../person.service';

@Component({
    selector: 'app-person-create',
    templateUrl: './person-create.component.html',
    styleUrls: ['./person-create.component.sass']
})
export class PersonCreateComponent implements OnInit {

    angForm: FormGroup;

    firstName: string = '';
    lastName: string = '';
    title: string = '';
    budget: string = '';
    phone: string = '';
    email: string = '';

    constructor(private personService: PersonService, private formBuilder: FormBuilder) {
        // this.createForm();
    }

    ngOnInit() {
        this.angForm = this.formBuilder.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            title: [null, Validators.required],
            budget: [null, Validators.required],
            phone: [null, Validators.required],
            email: [null, Validators.required]
        });
    }

    // createForm() {
    //     this.personForm = this.formBuilder.group({
    //         firstName: [null, Validators.required],
    //         lastName: [null, Validators.required],
    //         title: [null, Validators.required],
    //         budget: [null, Validators.required],
    //         phone: [null, Validators.required],
    //         email: [null, Validators.required]
    //     });
    // }

    addPerson() {
        console.log(this.angForm.value);
        console.log('name is ' + name);
        // console.log(this.personForm.value);
    }



}
