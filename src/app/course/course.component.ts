import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    Angular
    <br />
    <button class="btn btn-primary" [class.active]="isActive"> Save </button>
  `
})
export class CourseComponent{
  isActive = false;
}
