import { Component, AfterViewInit, ViewChildren, QueryList, ViewChild, ContentChild, AfterContentInit } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [];
  addItem() {
    this.items.push(this.items.length);
  }
  removeItem() {
    this.items.splice(this.items.length - 1, 1);
  }
  removeAll() {
    this.items.length = 0;
  }
}
