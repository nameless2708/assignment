import { Component, OnInit } from '@angular/core';
import { IMyOptions} from '../typescripts/pro/date-picker/interfaces';

@Component({
    selector: 'app-opportunity',
    templateUrl: './opportunity.component.html',
    styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
    date = new Date();
    date1 = new Date().toDateString();
    data = [];

    public myOption : IMyOptions = {
        disableUntil : {year : this.date.getFullYear(), month : this.date.getMonth()+1, day : this.date.getDate()},
        height : '16px',
        selectionTxtFontSize: '0.9rem',
        inline : false
    }

    constructor() {
        var obj = { code : 'admin', name : 'admin', owner : 'admin', cusname : 'admin', start : 'admin', end : 'admin', rate : 'admin'}
        var obj2 = { code : 'admin1', name : 'admin1', owner : 'admin1', cusname : 'admin', start : 'admin', end : 'admin', rate : 'admin'}

        for(let i=0; i < 50; i++){
            this.data.push(obj);
            this.data.push(obj2);
        }
    }

    ngOnInit() {
    }



}
