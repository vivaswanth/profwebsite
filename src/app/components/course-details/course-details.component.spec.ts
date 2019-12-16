import { NO_ERRORS_SCHEMA } from "@angular/core";
import { CourseDetailsComponent } from "./course-details.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("CourseDetailsComponent", () => {

  let fixture: ComponentFixture<CourseDetailsComponent>;
  let component: CourseDetailsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [CourseDetailsComponent]
    });

    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
