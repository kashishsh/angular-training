import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    Angular
    <br />
    <button class="btn btn-primary" (click) = "onClick($event)"> Save </button>
  `
})
export class CourseComponent{
  isActive = false;
  onClick($event) {
    console.log($event);
  }
}
