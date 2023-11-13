import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowStepScreenComponent } from './follow-step-screen/follow-step-screen.component';
import { StepperDemoExampleComponent } from './Stepper Example/stepper-demo-example/stepper-demo-example.component';

const routes: Routes = [
  {path:'',redirectTo:'app-follow-step-screen',pathMatch:'full'},
  {path:'app-follow-step-screen',component:FollowStepScreenComponent},
  {path:'stepper-comp',component:StepperDemoExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
