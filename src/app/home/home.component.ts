import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  
  public courses = [
    { 
      courseName: "CAE 464: HVAC Systems Design",
      courseCode: "cae_464_s19_syllabus.pdf", 
      courseUrl: "",
    },
    { 
      courseName: "CAE 465/526: Building Energy Conservation Technologies",
      courseCode: "cae_526_f18_syllabus.pdf",
      courseUrl: "",
    },
    {
      courseName: "CAE 553: Measurement and Instrumentation in Architectural Engineering",
      courseCode: "cae_553_sp18_syllabus.pdf", 
      courseUrl: "",
    }
  ];
  constructor(private storage: AngularFireStorage) { 

  }

  ngOnInit() {

    this.courses.forEach(element => {
      const ref = this.storage.ref("courses/"+element.courseCode);
      ref.getDownloadURL().toPromise().then((res) => {
        element.courseUrl = res;
      });  
    });
  }
}
