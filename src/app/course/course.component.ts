import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    <img src="{{imageUrl}}" />
    <table>
      <tr>
        <td [attr.colspan]="colSpan"></td>
      </tr>
    </table>
  `
})
export class CourseComponent{
  imageUrl = "http://lorempixel.com/400/200";
  colSpan = 2;
}
