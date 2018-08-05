import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-understanding-directives',
  templateUrl: './understanding-directives.component.html',
  styleUrls: ['./understanding-directives.component.css']
})
export class UnderstandingDirectivesComponent implements OnInit {
  courses = [1,2,3];
  constructor() { }

  ngOnInit() {
  }

}
