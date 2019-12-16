import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PresentationsComponent } from "./presentations.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PresentationsComponent", () => {

  let fixture: ComponentFixture<PresentationsComponent>;
  let component: PresentationsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PresentationsComponent]
    });

    fixture = TestBed.createComponent(PresentationsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
