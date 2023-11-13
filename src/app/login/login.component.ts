import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm!: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.fb.group({
      userEmailForm: this.fb.control('', [Validators.required,Validators.email]),
      userPasswordForm:this.fb.control('',[Validators.required])
    });
  }

  clearForm()
  {
    this.signInForm.reset();
  }

  onSubmit()
  {

  }

}
