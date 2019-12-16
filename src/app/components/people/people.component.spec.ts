import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PeopleComponent } from "./people.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PeopleComponent", () => {

  let fixture: ComponentFixture<PeopleComponent>;
  let component: PeopleComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PeopleComponent]
    });

    fixture = TestBed.createComponent(PeopleComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
