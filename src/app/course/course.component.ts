import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    Angular
    <br />
    <input [(ngModel)] = "email" (keyup.enter) ="onKeyUp()"/>
  `
})
export class CourseComponent{
  email = "a@b.com";
  onKeyUp() {
      // With event filtering
      console.log(this.email);
  }

}
