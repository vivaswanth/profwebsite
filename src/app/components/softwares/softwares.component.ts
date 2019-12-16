import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";

@Component({
  selector: "app-softwares",
  templateUrl: "./softwares.component.html",
  styleUrls: ["./softwares.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class SoftwaresComponent implements OnInit {
  
  constructor(private httpClient: HttpClientModule,
    private http: HttpClient) { 

  }

  
  ngOnInit() {
    // this.fetchRepository();

    // this.software.tree.forEach(element => {
    //   this.paths.push(element.path);
    // });

  }

}
