import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-directives',
  templateUrl: './understanding-directives.component.html',
  styleUrls: ['./understanding-directives.component.css']
})
export class UnderstandingDirectivesComponent implements OnInit {
  courses = [
    { id:1, name: 'Course1'},
    { id:2, name: 'Course2'},
    { id:3, name: 'Course3'},
    { id:4, name: 'Course4'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
