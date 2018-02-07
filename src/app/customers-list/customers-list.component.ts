import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-customers-list',
    templateUrl: './customers-list.component.html',
    styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {
    currentpage : any;
    apiArray : any;
    archiveArray : any;
    bigArray = [];
    pagearr = [];
    customerarr = [];
    dropdown = false;
    editArr = [];
    searchform: FormGroup;
    addform : FormGroup;
    editform: FormGroup;
    checked: null;



    cus_name: null;
    cus_email: null;
    checked100 = false;
    tickall : false;
    index: number;
    gotit : boolean;
    items: any;


    constructor(public formBuilder: FormBuilder, public http : HttpClient) {
        this.getListCustomer();
        this.archiveArray =  this.customerarr;

        this.searchform = this.formBuilder.group({
            data: ['']
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

    getCurrentArr(curPage){
        this.currentpage =  this.bigArray;
        this.customerarr = this.bigArray.slice(0 + ((curPage-1)*10),10 + ((curPage-1)*10));
        this.bigArray = this.currentpage;
        console.log(this.customerarr.length);
    }


    readyadd(){
        this.checked100 = true;
    }

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

    search() {
        //
        // console.log(this.archiveArray);
        // if ( this.searchform.value.data != null && this.searchform.value.data != '') {
        //     var string1;
        //     var string2;
        //     for (let a = 0; a < this.customerarr.length; a++) {
        //         if(this.customerarr[a].cus_code != null){
        //             string1 = (this.customerarr[a].cus_code).toLowerCase();
        //             string2 = (this.searchform.value.data).toLowerCase();
        //             if (string1.indexOf(string2)> -1
        //                 || this.checkedname(a) || this.checkedemail(a)) {
        //                 this.resultarr.push(this.customerarr[a]);
        //             }
        //         }
        //     }
        //     this.customerarr = this.resultarr;
        // } else {
        //     this.customerarr = this.archiveArray;
        // }
        if(this.searchform.value.data != null && this.searchform.value.data != ''){


        }
    }

    onchanging(index){
        this.customerarr[index].ticked = this.gotit;
    }

    getindex(index){
        console.log(this.editArr.length);
        if(this.customerarr[index].ticked == true){
            this.editArr[index.toString()] = this.editform;
            console.log(this.editArr[index.toString()]);
        }
        else if(this.customerarr[index].ticked == false){
            delete this.editArr[index.toString()];
            console.log(this.editArr[index.toString()]);
        }
    }

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
            console.log(this.editArr[parseInt(newarr[i])].value.customer_pri);
        }
    }

    editcustomer(i){
        console.log(this.editArr[i].value.customer_id);
        this.customerarr[i] = { cus_code : this.editArr[i].value.customer_id, cus_name : this.editArr[i].value.customer_name,
            cus_phone : this.editArr[i].value.customer_phone, cus_email : this.editArr[i].value.customer_email, cus_owner : this.editArr[i].value.customer_owner,
            cus_address : this.editArr[i].value.cus_address, cus_tax : this.editArr[i].value.customer_code, ticked : false, allowedit : false };
        var cus_obj = {cus_id:this.editArr[i].value.customer_pri,  cus_code : this.editArr[i].value.customer_id, cus_name : this.editArr[i].value.customer_name,
            cus_phone : this.editArr[i].value.customer_phone, cus_email : this.editArr[i].value.customer_email, cus_owner : this.editArr[i].value.customer_owner,
            cus_address : this.editArr[i].value.customer_address, cus_tax : this.editArr[i].value.customer_code };
        console.log('update');
        this.updateCustomer(cus_obj);
    }

    checkedname(index : any){

        var string1 = (this.customerarr[index].cus_name).toLowerCase();
        var string2 = (this.searchform.value.data).toLowerCase();
        if(this.cus_name != null && this.cus_name != false){
            if(string1.indexOf(string2) > -1){
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }



    checkedemail(index : any){
        if (this.customerarr[index].cus_email != null){
            var string1 = (this.customerarr[index].cus_email).toLowerCase();
            var string2 = (this.searchform.value.data).toLowerCase();
            if(this.cus_email != null && this.cus_email != false ){
                if(string1.indexOf(string2) > -1){
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }

    addcol1() {
        if (this.checked != null) {
            return true;
        } else {
            return false;
        }
    }

    setTick(a){
        console.log(a);
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

    addNewCustomer(){

        var cus_obj = {"cus_code" : this.addform.value.customer_id, "cus_name" : this.addform.value.customer_name,
            "cus_phone" : this.addform.value.customer_phone, "cus_email" : this.addform.value.customer_email,
            "cus_owner" : this.addform.value.customer_owner, "cus_address" : this.addform.value.customer_address,
            "cus_tax" : this.addform.value.customer_code};
        console.log(JSON.stringify(cus_obj));
        this.getApiAddCustomer(JSON.stringify(cus_obj)).subscribe(data =>{
            console.log(data);
        })
    }

    updateCustomer(obj){
       this.getApiUpdateCustomer( JSON.stringify(obj)).subscribe(data =>{
           console.log(data);
       });
    }

    getListCustomer(){
        this.getApiListCustomer().subscribe(data =>{
            this.apiArray = data;
            this.bigArray = JSON.parse(this.apiArray);
            var pagenum = Math.floor(this.bigArray.length / 10) + 1;
            for(let i = 1; i<=pagenum; i++){
                this.pagearr.push(i);
            }
            this.getCurrentArr(1);
        })
    }

    dropdo(){
        this.dropdown = true;
    }
}
