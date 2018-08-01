import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = "List of courses";
  courses;
  constructor_old() {
    // Without dependency injection :

    let service = new CoursesService();
    this.courses = service.getCourses();
    // Problems with this approach :
    // - By using new operator here, we have tightly coupled CoursesComponent with CoursesService.
    // - If in future we decide to use parameter to constructor of service, we have to update its call with argument
    // in all the places we have used this service.
  }
  constructor(service: CoursesService) {
    this.courses = service.getCourses();
    // Dependency Injection :
    // Instead of we creating the instance of service, we can ask angular to do the same for us.
    // Angular first create the instance of that service and pass the instance to the constructor.
    // If constructor of the service change in future, we don't have to change it at every place.. Angular will do it for us.


  }
  ngOnInit() {
  }

  getTitle() {
    return this.title;
  }
}
