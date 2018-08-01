import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    Angular
    <br />
    <input (keyup) ="onKeyUp($event)"/>
    <input #email (keyup.enter) ="onKeyUp2(email.value)"/>
  `
})
export class CourseComponent{
  onKeyUp2(value) {
      // With event filtering
      console.log(value);
  }
  onKeyUp($event) {
    // Without event filtering
    if($event.keyCode === 13)
      console.log('Enter was pressed');
  }

}
