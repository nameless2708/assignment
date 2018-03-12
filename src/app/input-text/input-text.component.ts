import { Component, OnInit, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-input-email',
    templateUrl: './input-text.component.html',
    styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

    @Input() group : FormGroup;
    @Input() labelName;
    input : string;

    constructor() { }

    ngOnInit() {
    }

}
