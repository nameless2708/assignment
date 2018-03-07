import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customer: any;
  cusarr = [];
  myarr = ["name","kawai",'wew'];


  constructor() {
      for ( let n = 0 ; n < 4 ; n++) {
          this.cusarr.push(this.customer = {id : 'GC1', name : 'Tom', phone : '@fat', email : 'the Bird'
              , owner : '@fat', address : 'the Bird', code : '@fat'});
          this.cusarr.push(this.customer = {id : 'GC2', name : 'John', phone : '@fat', email : 'John cena'
              , owner : '@fat', address : 'the Bird', code : '@fat'});
      }
  }

  ngOnInit() {
  }





}
