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
    myarr = [];


    onchanging(data){
        var label;
        var key;
        label = data.label;
        for(let i=0; i<this.myarr.length; i++){
            if (label == this.myarr[i].value){
                key = this.myarr[i].key;
            }
        }
        this.addform.controls[key].setValue(data.value);
    }


    constructor(private formbuilder : FormBuilder) {
        var arr = [];
        arr[0] = {key : 'customer_owner', value : 'Chủ sở hữu'};
        arr[1] = {key : 'customer_code', value : 'Mã khách hàng'};
        arr[2] = {key : 'customer_name', value : 'Tên khách hàng'};
        arr[3] = {key : 'customer_phone', value : 'Số điện thoại'};
        arr[4] = {key : 'customer_email', value : 'Địa chỉ email'};
        arr[5] = {key : 'customer_taxcode', value : 'Mã số thuế'};
        arr[6] = {key : 'customer_address', value : 'Địa chỉ văn phòng'};
        arr[7] = {key : 'customer_website', value : 'Website'};
        arr[8] = {key : 'customer_shared', value : 'Chia sẻ'};
        arr[9] = {key : 'customer_contact', value : 'Người liên hệ'};
        this.myarr = arr;

        this.addform = this.formbuilder.group({
            'Chủ sở hữu' : ['', Validators.compose([Validators.required])],
            'Mã khách hàng' : ['', Validators.compose([Validators.required])],
            'Tên khách hàng' : ['', Validators.compose([Validators.required])],
            'Số điện thoại': ['', Validators.compose([Validators.required, Validators.pattern('(09|01[2|6|8|9])+([0-9]{8})\\b')])],
            'Địa chỉ email': ['', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])],
            'Mã số thuế': ['', Validators.compose([Validators.required])],
            'Địa chỉ văn phòng': ['', Validators.compose([Validators.required])],
            'Website': ['', Validators.compose([Validators.required])],
            'Chia sẻ': ['', Validators.compose([Validators.required])],
            'Người liên hệ': ['', Validators.compose([Validators.required])],
            'Chức vụ': ['', Validators.compose([Validators.required])],
            'Giới tính': ['', Validators.compose([Validators.required])],
            'Số di động': ['', Validators.compose([Validators.required])],
            'Số máy bàn': ['', Validators.compose([Validators.required])],
            'Email liên hệ': ['', Validators.compose([Validators.required])],
            'Địa chỉ liên hệ': ['', Validators.compose([Validators.required])],
            'Ngày sinh nhật': [new Date()],
            'Nick chat': ['', Validators.compose([Validators.required])],
            'Ngày tạo khách hàng': [new Date(), Validators.compose([Validators.required])],
            'Tài khoản ngân hàng': ['', Validators.compose([Validators.required])],
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
        for(let i = this.myarr.length-1; i>=0 ; i--){
            if(this.addform.get(this.myarr[i].value).hasError('pattern')){
                this.errormsg = this.myarr[i].value + ' không hợp lệ';
            }
            if(this.addform.get(this.myarr[i].value).hasError('required')){
                this.errormsg = this.myarr[i].value + ' không được để trống';
            }
            if(this.addform.get(this.myarr[i].value).hasError('maxlength')){
                this.errormsg = this.myarr[i].value + ' quá dài';
            }
            if(this.addform.get(this.myarr[i].value).hasError('minlength')){
                this.errormsg = this.myarr[i].value + ' quá ngắn';
            }
        }
        alert(this.errormsg);
    }

    submitadd(){
        this.addform.reset();
    }
}
