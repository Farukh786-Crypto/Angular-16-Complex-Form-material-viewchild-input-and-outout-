import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperDemoExampleComponent } from './stepper-demo-example.component';

describe('StepperDemoExampleComponent', () => {
  let component: StepperDemoExampleComponent;
  let fixture: ComponentFixture<StepperDemoExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepperDemoExampleComponent]
    });
    fixture = TestBed.createComponent(StepperDemoExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
