import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-customer',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

    addform : FormGroup;
    errormsg : string;

    constructor(private formbuilder : FormBuilder) {
        this.addform = this.formbuilder.group({
            customer_owner : ['', Validators.compose([Validators.required])],
            customer_code: ['', Validators.compose([Validators.required])],
            customer_name: ['', Validators.compose([Validators.required])],
            customer_phone: ['', Validators.compose([Validators.required, Validators.pattern('(09|01[2|6|8|9])+([0-9]{8})\\b')])],
            customer_email: ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            customer_taxcode: ['', Validators.compose([Validators.required])],
            customer_address: ['', Validators.compose([Validators.required])],
            customer_website: ['', Validators.compose([Validators.required])],
            customer_shared: ['', Validators.compose([Validators.required])],
            customer_contact: ['', Validators.compose([Validators.required])],
            customer_position: ['', Validators.compose([Validators.required])],
            customer_gender: ['', Validators.compose([Validators.required])],
            customer_cellphone: ['', Validators.compose([Validators.required])],
            customer_telephone: ['', Validators.compose([Validators.required])],
            customer_contactemail: ['', Validators.compose([Validators.required])],
            customer_contactaddress: ['', Validators.compose([Validators.required])],
            customer_birthday: [new Date()],
            customer_nickchat: ['', Validators.compose([Validators.required])],
            customer_joindate: [new Date(), Validators.compose([Validators.required])],
            customer_creditcard: ['', Validators.compose([Validators.required])],
            customer_bank: ['', Validators.compose([Validators.required])],
            customer_businessaddress: ['', Validators.compose([Validators.required])],
            customer_location: ['', Validators.compose([Validators.required])],
            customer_phuongxa: ['', Validators.compose([Validators.required])],
            customer_quanhuyen: ['', Validators.compose([Validators.required])],
            customer_tinhthanhpho: ['', Validators.compose([Validators.required])],
            customer_nation: ['', Validators.compose([Validators.required])],
            customer_level: ['', Validators.compose([Validators.required])],
            customer_loan: ['', Validators.compose([Validators.required])],
            customer_lichCSKH: ['', Validators.compose([Validators.required])],
            customer_description: ['', Validators.compose([Validators.required])],
        })
    }

    ngOnInit() {
    }

    submit(){
        var arr = [];
        arr[0] = {key : 'customer_owner', value : 'chủ sở hữu'};
        arr[1] = {key : 'customer_code', value : 'mã khách hàng'};
        arr[2] = {key : 'customer_name', value : 'tên khách hàng'};
        arr[3] = {key : 'customer_phone', value : 'số điện thoại'};
        arr[4] = {key : 'customer_email', value : 'địa chỉ email'};
        arr[5] = {key : 'customer_taxcode', value : 'mã số thuế'};
        arr[6] = {key : 'customer_address', value : 'địa chỉ văn phòng'};
        arr[7] = {key : 'customer_website', value : 'website'};
        arr[8] = {key : 'customer_shared', value : 'chia sẻ'};
        arr[9] = {key : 'customer_contact', value : 'liên hệ'};
        for(let i = arr.length-1; i>=0 ; i--){
            if(this.addform.get(arr[i].key).hasError('pattern')){
                this.errormsg = arr[i].value + ' không hợp lệ';
            }
            if(this.addform.get(arr[i].key).hasError('required')){
                this.errormsg = arr[i].value + ' không được để trống';
            }
            if(this.addform.get(arr[i].key).hasError('maxlength')){
                this.errormsg = arr[i].value + ' quá dài';
            }
            if(this.addform.get(arr[i].key).hasError('minlength')){
                this.errormsg = arr[i].value + ' quá ngắn';
            }
        }
        alert(this.errormsg);
    }

    submitadd(){
        this.addform.reset();
    }
}
