import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-stepper-demo-example',
  templateUrl: './stepper-demo-example.component.html',
  styleUrls: ['./stepper-demo-example.component.css']
})
export class StepperDemoExampleComponent { 
  isLinear:boolean = false;
  
  statusObj:Status[]=[
    {value:'pass',viewValue:'Pass'},
    {value:'fail',viewValue:'Fail'}
  ];

  firstFormGroup:FormGroup=this.fb.group({
    statusCtrl:['',Validators.required]
  });
  secondFormGroup:FormGroup=this.fb.group({
    secondCtrl:['',Validators.required],
  });

  constructor(public fb: FormBuilder) {
    console.log('Stepper started !!');
  } 
 
}
