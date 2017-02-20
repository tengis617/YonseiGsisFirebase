import { Component, OnInit, Input } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Course } from './../course.model';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: FirebaseListObservable<Course[]>;
  filter: string;
  constructor(ngFire: AngularFire) {
    this.courses = ngFire.database.list('course');
   }

  ngOnInit() {
  }

}
