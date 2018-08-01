import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    Angular
    <br />
    <input (keyup) ="onKeyUp($event)"/>
    <input (keyup.enter) ="onKeyUp2()"/>
  `
})
export class CourseComponent{
  onKeyUp2() {
      // With event filtering
      console.log('Enter was pressed');
  }
  onKeyUp($event) {
    // Without event filtering
    if($event.keyCode === 13)
      console.log('Enter was pressed');
  }

}
