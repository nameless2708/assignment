import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'table-comp',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

    @Input() col: number;
    @Input() row: number;
    @Input() data = [];
    @Input() add : boolean;

    objectValues = Object.keys;
    objectKeys = Object.getOwnPropertyNames;
    content = [];
    pages = [];
    paginations = [];


    constructor(){

    }

    ngOnInit() {
        var a;
        if(this.data.length%this.row == 0)
        {
            a = this.data.length/this.row
        }
        else{
            a = this.data.length/this.row + 1
        }
        for(let i=1; i <= a; i++)
        {
            var obj = {index : i, isactive : ''}
            this.paginations.push(obj);
        }
        this.pages = this.paginations.slice(0, 5);
        this.pages[0].isactive = 'active';
        this.content = this.data.slice(0, this.row);

    }


    getCurrentPage(index){
        for(let i=0; i<this.paginations.length; i++){
            this.paginations[i].isactive = '';
        }
        this.pages[index].isactive = 'active';
        this.content = this.data.slice(this.row*index, this.row *(index+1))
    }

    forward(){
        if(this.pages.length > 4){
            if(this.pages[4].index < this.paginations.length )
            {
                let a= this.pages[4].index;
                this.pages = [];
                for(let i=0; i < 5; i++){
                    if(this.paginations[i+a] !== undefined)
                    {
                        this.pages.push(this.paginations[i + a]);
                    }
                }
            }
        }
    }

    backward(){
        if(this.pages[0].index != this.paginations[0].index){
            let a = this.pages[0].index;
            this.pages = [];
            for(let i=2; i<7; i++){
                this.pages.push(this.paginations[a - i]);
            }
            this.pages.reverse();
        }
    }

    firstpage(){
        if(this.pages[0].index != this.paginations[0].index){
            this.pages= [];
            for(let i = 0;i < 5; i++){
                this.pages.push(this.paginations[i]);
            }
        }
    }

    lastpage(){

    }
}
