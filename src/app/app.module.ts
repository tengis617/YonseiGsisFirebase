import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
// Angular Fire 2
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './core/app/app.component';
import { NavComponent } from './core/nav/nav.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseDetailsComponent } from './course/course-details/course-details.component';
import { CourseAddComponent } from './course/course-add/course-add.component';
import { ProfessorListComponent } from './professor/professor-list/professor-list.component';
import { CourseFilterPipe } from './course/course-list/course-filter.pipe';

const appRoutes: Routes = [
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:id', component: CourseDetailsComponent},
  {path: 'courses-add', component: CourseAddComponent},
  {path: 'professors', component: ProfessorListComponent},
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CourseListComponent,
    CourseDetailsComponent,
    CourseAddComponent,
    ProfessorListComponent,
    CourseFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
