import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-comp',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() content = 'A';
  @Input() action(){

  }
  constructor() { }

  ngOnInit() {
  }

}
