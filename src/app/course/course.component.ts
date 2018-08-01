import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    Using string interpolation :
    <h2> {{title}} </h2>
    <img src="{{imageUrl}}" />
    <br/>
    <hr/>
    Using Property binding :
    <h2 [textContent]="title"></h2>
    <img [src]="imageUrl" />
  `
})
export class CourseComponent{
  title = "List of courses";
  imageUrl = "http://lorempixel.com/400/200";
}
