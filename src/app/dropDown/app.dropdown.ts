import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';


export class DropdownValue {
    value:string;
    label:string;
  
    constructor(value:string,label:string) {
      this.value = value;
      this.label = label;
    }
  }
  
  @Component({
    selector: 'dropdown',
    templateUrl: 'app.dropdown.html',
    styleUrls: ['app.dropdown.css']
  })
  export class DropdownComponent implements OnInit {
    @Input()
    values: DropdownValue[];

  @Input()
  selectedVal: string[];

  @Input()
  disable: boolean = false;

  @Output()
  valueChange: EventEmitter<string>;

  ngOnInit() {
  }

  constructor(private elementRef:ElementRef) {
    this.valueChange = new EventEmitter();
    
  }

  selectItem(value: any) {
    this.valueChange.emit(value);
  }
}