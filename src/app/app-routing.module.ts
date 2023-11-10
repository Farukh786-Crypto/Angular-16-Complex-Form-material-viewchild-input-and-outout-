import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperDemoExampleComponent } from './Stepper Example/stepper-demo-example/stepper-demo-example.component';

const routes: Routes = [
  {path:'stepper-comp',component:StepperDemoExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
