import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ResearchComponent } from "./research.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ResearchComponent", () => {

  let fixture: ComponentFixture<ResearchComponent>;
  let component: ResearchComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ResearchComponent]
    });

    fixture = TestBed.createComponent(ResearchComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
