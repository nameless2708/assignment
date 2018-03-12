import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'filter-comp',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    optionsSelect = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
    ];
  constructor() { }

  ngOnInit() {
  }

}
