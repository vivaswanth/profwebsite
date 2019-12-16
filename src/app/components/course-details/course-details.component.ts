import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-course-details",
  templateUrl: "./course-details.component.html",
  styleUrls: ["./course-details.component.scss"]
})

export class CourseDetailsComponent implements OnInit {
  
  public currentCourseId;
  public busy: any;
  public courseData = {
    "courseName": null,
    "courseCode": null,
    "courseDescription": null,
    "courseUrl": null,
    "assignments": [],
    "lectureNotes": [],
    "projects": [],
    "exams": []
  };

  constructor(private activatedRoute: ActivatedRoute,
    private storage: AngularFireStorage,
    private afs: AngularFirestore) { 

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.currentCourseId = params["courseId"];
      
      this.busy = this.afs.collection("courses").doc(this.currentCourseId).get().subscribe((documentSnapshot)=>{
        this.courseData.courseName = documentSnapshot.data().courseName;
        this.courseData.courseCode = documentSnapshot.data().courseCode;
        this.courseData.courseDescription = documentSnapshot.data().courseDescription;
        this.courseData.courseUrl = documentSnapshot.data().courseUrl;
        this.courseData.exams = documentSnapshot.data().Exams;
        this.courseData.assignments = documentSnapshot.data().assignments;
        this.courseData.projects = documentSnapshot.data().projects;
        let count = 0;
        Object.keys(documentSnapshot.data().lectureNotes[0]).forEach(key => {
          count++;
          this.courseData.lectureNotes.push(
            {
              name: "lecture-" + count + ": " + documentSnapshot.data().lectureNotes[0][key].name,
              url: documentSnapshot.data().lectureNotes[0][key].url
              // name: "lecture-" + count,
              // url: documentSnapshot.data().lectureNotes[0][key]
            }
          );  
        });
      });
      
    });
  }
}
