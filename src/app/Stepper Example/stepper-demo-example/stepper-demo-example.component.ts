import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

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
  isLinear: boolean = true;

  statusObj: Status[] = [
    { value: 'pass', viewValue: 'Pass' },
    { value: 'fail', viewValue: 'Fail' }
  ];

  firstFormGroup: FormGroup = this.fb.group({
    statusFirstCtrl: ['', Validators.required]
  });
  secondFormGroup: FormGroup = this.fb.group({
    statusSecondCtrl: ['', Validators.required]
  });
  thirdFormGroup: FormGroup = this.fb.group({
    statusThirdCtrl: ['', Validators.required]
  });
  fourFormGroup: FormGroup = this.fb.group({
    statusFourCtrl: ['', Validators.required]
  });
  fifthFormGroup: FormGroup = this.fb.group({
    statusFifthCtrl: ['', Validators.required]
  });
  sixthFormGroup: FormGroup = this.fb.group({
    statusSixthCtrl: ['', Validators.required]
  });
  sevenFormGroup: FormGroup = this.fb.group({
    statusSevenCtrl: ['', Validators.required]
  });
  eightFormGroup: FormGroup = this.fb.group({
    statusEightCtrl: ['', Validators.required]
  });
  nineFormGroup: FormGroup = this.fb.group({
    statusNineCtrl: ['', Validators.required]
  });
  tenFormGroup: FormGroup = this.fb.group({
    statusTenCtrl: ['', Validators.required]
  });
  elevenFormGroup: FormGroup = this.fb.group({
    statusElevenCtrl: ['', Validators.required]
  });

  constructor(public fb: FormBuilder) {
    console.log('Stepper started !!');
  }

  navigateToNextStep(stepper: MatStepper): void {
    // Change linear mode and navigate to the next step
    this.isLinear = !this.isLinear;
    stepper.next();
  }

}
