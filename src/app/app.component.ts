import { Component, AfterViewInit, ViewChildren, QueryList, ViewChild, ContentChild, AfterContentInit } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
/*
  - There are times when a parent component needs access to its children.
  - @ViewChildren - Returns the specified elments of directives from the view DOM as querylist
  - We can use @ViewChildren decorator to grab elements from the host view.
  - The @ViewChildren decorator supports directive or component type as a parameter or the name of
    template variable.
  - When the parameter is component/directive the return value will be component/directive instance.
  - When the paramter is the name of template variable, the return will be the reference to the
    native element.
  - By default, the ViewChildren decorator will return the component instance, but you can ask for
    other tokens:
    1. The native DOM element : @ViewChildren(AlertComponent, { read: ElementRef }) alerts: QueryList<ElementRef>
    2. ViewContainerRef: @ViewChildren(AlertComponent, { read: ViewContainerRef }) alerts: QueryList<ViewContainerRef>

  - QueryList:
      - The return type of @ViewChildren is Querylist. It is just a fancy name for an object that stores a
        list of items. What is special about this object is, when the state of application changes, Angular
        will automatically update the object items for you.
      - QueryList implements an iterable interface, therefore, it can be used in Angular templates with
        the ngFor directive.
      - QueryList API:
        - Getters:
          - first: get the first item
          - last: get the last item
          - length: get the item length
        - Methods:
          - map()
          - filter()
          - find()
          - reduce()
          - forEach()
          - some()
          - toArray()
          - changes(): Changes can be observed by subscribing to the changes Observable.
            Any time a child element is added, removed, or moved, the query list will be updated,
            and the changes observable of the query list will emit a new value.

        - Note: The QueryList is initialized only before the ngAfterViewInit lifecycle hook,
          therefore, is available from this point.
      - @ViewChildren don't include elements that exists within the ng-content tag

      - @ContentChildren:
        - It includes only the element that exists within the ng-content tag.
        - Returns the specified element or directive  from the content DOM as
          queryList.
        - The QueryList in initialized only before the ngAfterContentInit lifecycle hook,
          therefore is only available from this point

*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>;
  @ViewChildren('test') testList: QueryList<any>;
  @ViewChild('test') test: QueryList<any>;

  ngAfterViewInit() {
    this.alerts.forEach(alertInstance => console.log(alertInstance));
    this.testList.forEach(element => {
      console.log(element);
    });
    console.log(this.test);
  }

}
