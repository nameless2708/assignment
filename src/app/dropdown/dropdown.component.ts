import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dropdown-comp',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() content : string;

  display = 'none';

  open(){
    if(this.display == 'none'){
      this.display = 'block';
    }
    else{
      this.display = 'none';
    }
  }

  close(){
    if(this.display == 'block'){
      this.display = 'none';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
