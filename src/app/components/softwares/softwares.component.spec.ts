import { NO_ERRORS_SCHEMA } from "@angular/core";
import { SoftwaresComponent } from "./softwares.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("SoftwaresComponent", () => {

  let fixture: ComponentFixture<SoftwaresComponent>;
  let component: SoftwaresComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [SoftwaresComponent]
    });

    fixture = TestBed.createComponent(SoftwaresComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
