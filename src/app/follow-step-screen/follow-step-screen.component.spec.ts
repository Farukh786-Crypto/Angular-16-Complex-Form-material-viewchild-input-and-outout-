import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowStepScreenComponent } from './follow-step-screen.component';

describe('FollowStepScreenComponent', () => {
  let component: FollowStepScreenComponent;
  let fixture: ComponentFixture<FollowStepScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowStepScreenComponent]
    });
    fixture = TestBed.createComponent(FollowStepScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
