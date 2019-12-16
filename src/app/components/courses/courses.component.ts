import { Component, OnInit } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"]
})

export class CoursesComponent implements OnInit {
  
  constructor(private storage: AngularFireStorage) { 

  }

  ngOnInit() {

  }
}
