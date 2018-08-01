import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
    {{course.title | uppercase | lowercase }} <br/>
    {{course.students | number}} <br/>
    {{course.rating | number:'1.2-2'}} <br/>
    {{course.price | currency: 'AUD'}} <br/>
    {{course.releaseDate}} <br/>
  `
})
export class CourseComponent{
  course = {
    title: 'Test course',
    rating: 3.234,
    students: 123456,
    price: 123.45,
    releaseDate: new Date(2018, 2, 3)
  };
}
