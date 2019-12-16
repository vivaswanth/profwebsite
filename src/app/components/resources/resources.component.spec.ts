import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ResourcesComponent } from "./resources.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ResourcesComponent", () => {

  let fixture: ComponentFixture<ResourcesComponent>;
  let component: ResourcesComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ResourcesComponent]
    });

    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
