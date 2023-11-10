import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavDemoComponent } from './side-nav-demo.component';

describe('SideNavDemoComponent', () => {
  let component: SideNavDemoComponent;
  let fixture: ComponentFixture<SideNavDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavDemoComponent]
    });
    fixture = TestBed.createComponent(SideNavDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
