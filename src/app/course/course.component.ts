import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  constructor() { }

  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }
}
