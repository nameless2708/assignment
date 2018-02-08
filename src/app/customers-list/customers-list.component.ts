import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

    apiArray : any;
    archiveArray = null;
    bigArray = null;
    pagearr = [];
    customerarr = [];
    editArr = [];
    searchform: FormGroup;
    addform : FormGroup;
    editform: FormGroup;
    checked: null;
    drop = 'none';
    cus_name: null;
    cus_email: null;
    checked100 = false;
    tickall : false;
    index: number;
    gotit : boolean;
    items: any;
    checkdrop = false;

    constructor(public formBuilder: FormBuilder, public http : HttpClient) {
        this.getListCustomer();
        this.searchform = this.formBuilder.group({
            customer_id: null,
            customer_name: null,
            customer_phone: null,
            customer_email: null,
            customer_owner: null,
            customer_code: null
        });
        this.addform = this.formBuilder.group({
            customer_id: ['', Validators.compose([Validators.required])],
            customer_name: ['', Validators.compose([Validators.required])],
            customer_phone: ['', Validators.compose([Validators.required])],
            customer_email: ['', Validators.compose([Validators.required])],
            customer_owner: ['', Validators.compose([Validators.required])],
            customer_address: ['', Validators.compose([Validators.required])],
            customer_code: ['', Validators.compose([Validators.required])],
            customer_addcol: ['']
        });
        this.editform = this.formBuilder.group({
            index: [''],
            customer_id: [''],
            customer_name: [''],
            customer_phone: [''],
            customer_email: [''],
            customer_owner: [''],
            customer_address: [''],
            customer_code: [''],
            customer_addcol: ['']
        });
    }

    ngOnInit() {

    }

    //get current page
    getCurrentpage(curPage){
        this.customerarr = this.bigArray.slice(0 + ((curPage-1)*10),10 + ((curPage-1)*10));
    }


    //add new record
    addNewcol(){
        this.checked100 = true;
    }

    //get customer from JSON
    getListCustomer(){
        this.getApiListCustomer().subscribe(data =>{
            this.apiArray = data;
            this.bigArray = JSON.parse(this.apiArray);
            var pagenum = Math.floor(this.bigArray.length / 10) + 1;
            for(let i = 1; i<=pagenum; i++){
                this.pagearr.push(i);
            }
            this.getCurrentpage(1);
        })
    }

    //add new customer
    addcustomer(){
        this.addNewCustomer();
        if(this.addform.valid){
            var newcus = {cus_code : this.addform.value.customer_id, cus_name : this.addform.value.customer_name, cus_phone : this.addform.value.customer_phone
                , cus_email : this.addform.value.customer_email, cus_owner : this.addform.value.customer_owner, cus_address : this.addform.value.customer_address
                , cus_tax : this.addform.value.customer_code };
            this.customerarr.unshift(newcus);
            this.customerarr.pop();
            this.bigArray.unshift(newcus);
            this.checked100 = false;
            this.addform.reset();
        }
        else{
            alert("empty field");
        }
    }

    addNewCustomer(){
        var cus_obj = {"cus_code" : this.addform.value.customer_id, "cus_name" : this.addform.value.customer_name,
            "cus_phone" : this.addform.value.customer_phone, "cus_email" : this.addform.value.customer_email,
            "cus_owner" : this.addform.value.customer_owner, "cus_address" : this.addform.value.customer_address,
            "cus_tax" : this.addform.value.customer_code};
        this.getApiAddCustomer(JSON.stringify(cus_obj)).subscribe();
    }

    //search for customer
    search() {
        if(this.searchform.value.customer_id != null || this.searchform.value.customer_name != null
        || this.searchform.value.customer_email != null || this.searchform.value.customer_phone != null
        || this.searchform.value.customer_owner != null || this.searchform.value.customer_code != null){
            if(this.bigArray != null){
                this.archiveArray = this.bigArray;
            }
            this.searchCustomer();
        }
        else {
            this.bigArray = this.archiveArray;
        }
    }

    searchCustomer(){
        var res : any;
        var cus = {"cus_code" : this.searchform.value.customer_id, "cus_name" : this.searchform.value.customer_name,
            "cus_phone" : this.searchform.value.customer_phone, "cus_email" : this.searchform.value.customer_email,
            "cus_owner" : this.searchform.value.customer_owner, "cus_tax" : this.searchform.value.customer_code};
        this.getApiSearchCustomer(JSON.stringify(cus)).subscribe(data =>{
            res = (data);
            this.bigArray = JSON.parse(res);
            var pagenum = Math.floor(this.bigArray.length / 10) + 1;
            this.pagearr = [];
            for(let i = 1; i<=pagenum; i++){
                this.pagearr.push(i);
            }
            this.getCurrentpage(1);
        })
    }

    clearsearchform(){
        this.searchform.reset();
    }

    getindex(index){
        if(this.customerarr[index].ticked == true){
            this.editArr[index.toString()] = this.editform;
        }
        else if(this.customerarr[index].ticked == false){
            delete this.editArr[index.toString()];
        }
    }

    //allow user to edit selected customer
    allowedit(){
        var newarr = Object.keys(this.editArr);
        for(let i = 0; i < newarr.length; i++){
            if (this.customerarr[parseInt(newarr[i])].ticked == true){
                this.customerarr[parseInt(newarr[i])].allowedit = true;
                this.editArr[parseInt(newarr[i])] = this.formBuilder.group({
                    index: [0],
                    customer_pri: [this.customerarr[parseInt(newarr[i])].cus_id],
                    customer_id: [this.customerarr[parseInt(newarr[i])].cus_code],
                    customer_name: [this.customerarr[parseInt(newarr[i])].cus_name],
                    customer_phone: [this.customerarr[parseInt(newarr[i])].cus_phone],
                    customer_email: [this.customerarr[parseInt(newarr[i])].cus_email],
                    customer_owner: [this.customerarr[parseInt(newarr[i])].cus_owner],
                    customer_address: [this.customerarr[parseInt(newarr[i])].cus_address],
                    customer_code: [this.customerarr[parseInt(newarr[i])].cus_tax],
                    customer_addcol: ['']
                });
            }
        }
    }

    //edit selected customer
    editcustomer(i){
        this.customerarr[i] = { cus_code : this.editArr[i].value.customer_id, cus_name : this.editArr[i].value.customer_name,
            cus_phone : this.editArr[i].value.customer_phone, cus_email : this.editArr[i].value.customer_email, cus_owner : this.editArr[i].value.customer_owner,
            cus_address : this.editArr[i].value.cus_address, cus_tax : this.editArr[i].value.customer_code, ticked : false, allowedit : false };
        var cus_obj = {cus_id:this.editArr[i].value.customer_pri,  cus_code : this.editArr[i].value.customer_id, cus_name : this.editArr[i].value.customer_name,
            cus_phone : this.editArr[i].value.customer_phone, cus_email : this.editArr[i].value.customer_email, cus_owner : this.editArr[i].value.customer_owner,
            cus_address : this.editArr[i].value.customer_address, cus_tax : this.editArr[i].value.customer_code };
        this.updateCustomer(cus_obj);
    }

    updateCustomer(obj){
        this.getApiUpdateCustomer( JSON.stringify(obj)).subscribe();
    }



    addcol1() {
        if (this.checked != null) {
            return true;
        } else {
            return false;
        }
    }

    //tick or untick all
    setTick(a){
        for(let i =0; i<this.customerarr.length; i++){
            this.customerarr[i].ticked = a;
        }
    }


    getApiAddCustomer(data){
        return this.http.post('https://sum4cp6813.execute-api.ap-southeast-1.amazonaws.com/testStage', data);
    }

    getApiListCustomer(){
        return this.http.get('https://9ews77e2n2.execute-api.ap-southeast-1.amazonaws.com/liststage');
    }

    getApiUpdateCustomer(data){
        return this.http.post('https://layjvm9wx1.execute-api.ap-southeast-1.amazonaws.com/update', data);
    }

    getApiSearchCustomer(data){
        return this.http.post('https://6npsrgviu1.execute-api.ap-southeast-1.amazonaws.com/search', data);
    }

    //support dropdown
    dropdo(){
        this.checkdrop = true;
        if(this.drop == 'block'){
            this.drop = 'none';
        }
        else if(this.drop == 'none'){
            this.drop = 'block';
        }
    }

    //support dropdown
    changeit(){
        if(this.drop == 'block' && this.checkdrop == false){
            this.drop = 'none';
        }
        this.checkdrop = false;
    }

}
