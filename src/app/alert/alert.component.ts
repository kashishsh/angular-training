import { Component, OnInit, Input, AfterContentInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <h1 (click)="alert()">{{type}}</h1>
    <ng-content></ng-content>
  `,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, AfterContentInit {
  @Input() type = 'Success';
  @ContentChild('insideNgContent') insideNgContent;
  alert() {
    console.log('Alert!!!');
  }
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit() {
    console.log(this.insideNgContent);
  }
}
