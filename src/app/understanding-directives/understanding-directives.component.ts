import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-directives',
  templateUrl: './understanding-directives.component.html',
  styleUrls: ['./understanding-directives.component.css']
})
export class UnderstandingDirectivesComponent implements OnInit {
  courses: any = [
    { id:1, name: 'Course1'},
    { id:2, name: 'Course2'},
    { id:3, name: 'Course3'},
    { id:4, name: 'Course4'}
  ];
  addCourse() {
    this.courses.push({ id: 5, name: 'Course5'});
  }
  onRemove(course) {
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }
  onUpdate(course) {
    course.name = "Update";
  }
  constructor() { }

  ngOnInit() {
  }

}
