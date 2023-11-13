import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-follow-step-screen',
  templateUrl: './follow-step-screen.component.html',
  styleUrls: ['./follow-step-screen.component.css']
})
export class FollowStepScreenComponent {
  constructor(private router:Router) {
    
  }
  submitForm(): void {
    this.router.navigate(['/stepper-comp'])
    console.log('Submit button clicked!');
    // Add more logic as needed
  }
}
