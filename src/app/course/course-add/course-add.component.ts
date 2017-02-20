import { Component, OnInit } from '@angular/core';
import { Course } from './../course.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})

export class CourseAddComponent implements OnInit {
  course: Course;
  courses: FirebaseListObservable<Course[]>;

  constructor(ngFire: AngularFire) {
    this.courses = ngFire.database.list('/course');
  }

  ngOnInit() {
  }
  addCourse(form): void {
    this.course = new Course(
      form.courseName,
      form.major,
      form.concentrationField,
      form.professor
    );
    // this.course.concentrationField = form.concentrationField;
    // this.course.major = form.major;
    // this.course.name = form.courseName;
    // this.course.professor = form.professor;
    console.log('the model has values of : ', this.course);
    console.log('this is the value: ', form);
    this.courses.push(this.course);
  }

}
