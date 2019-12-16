import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PeopleComponent } from './components/people/people.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { ResearchComponent } from './components/research/research.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'presentations', component: PresentationsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'softwares', component: SoftwaresComponent },
  { path: 'courses/courseDetails/:courseId', component: CourseDetailsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
