import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    mydata : string;
    mydata1: string;
    customer: any;
    cusarr = [];
    output = 'hello';
    myarr = ['owner','cuscode'];
    input = '';
    addform : FormGroup;

    onchanging(value){
        this.input = value;
        console.log(value);
    }


    constructor(private formbuilder : FormBuilder) {

        // this.addform = new FormGroup({
        //     AAAA : new FormControl('')
        // })
        this.addform = this.formbuilder.group({
            AAAA : ['']
        })
    }

    display(){
        console.log(this.addform.get('AAAA').value)
    }

    ngOnInit() {
    }





}
