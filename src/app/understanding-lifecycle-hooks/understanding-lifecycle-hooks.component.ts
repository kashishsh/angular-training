import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-understanding-lifecycle-hooks',
  template: `
    Item --->>> {{this.data}}
    <hr />
  `,
  styleUrls: ['./understanding-lifecycle-hooks.component.css']
})
export class UnderstandingLifecycleHooksComponent implements OnInit {
  @Input('item') data: any;
  constructor() {
    console.log(`new - data is ${this.data}`);
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('called', changes);
  }

  ngOnInit() {
    console.log(`ngOnInit  - data is ${this.data}`);
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
