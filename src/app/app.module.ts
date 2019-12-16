import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

// Material Modules
import { MdlModule } from '@angular-mdl/core';

// Firebase angular libs
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';

// Add the firebase configuration
import { environment } from 'src/environments/environment';

// Common Components
import { NavbarComponent } from './common-components/navbar/navbar.component';

// Components
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PeopleComponent } from './components/people/people.component';
import { PresentationsComponent } from './components/presentations/presentations.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SoftwaresComponent } from './components/softwares/softwares.component';
import { ResearchComponent } from './components/research/research.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    PeopleComponent,
    PresentationsComponent,
    ResourcesComponent,
    SoftwaresComponent,
    ResearchComponent,
    CourseDetailsComponent,

    //common components
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireDatabaseModule,

    // Material Modules
    MdlModule,
    HttpClientModule,
  ],
  providers: [
    AngularFirestoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
