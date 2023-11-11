import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './input and Output/parent/parent.component';
import { ChildComponent } from './input and Output/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolComponent } from './school/school.component';
import { StepperDemoExampleComponent } from './Stepper Example/stepper-demo-example/stepper-demo-example.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SideNavDemoComponent } from './side-nav-demo/side-nav-demo.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardExampleComponent } from './card-example/card-example.component';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { ParentViewChildComponent } from './ViewChild-Example/parent-view-child/parent-view-child.component';
import { ChildViewChildComponent } from './ViewChild-Example/child-view-child/child-view-child.component';
import { ParentView1Component } from './ViewChildExample2/parent-view1/parent-view1.component';
import { ChildView1Component } from './ViewChildExample2/child-view1/child-view1.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    SchoolComponent,
    StepperDemoExampleComponent,
    SideNavDemoComponent,
    CardExampleComponent,
    ParentViewChildComponent,
    ChildViewChildComponent,
    ParentView1Component,
    ChildView1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatInputModule ,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
