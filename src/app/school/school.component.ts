import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { School } from '../models/school';
/// https://javascript.plainenglish.io/how-to-manage-complex-forms-in-angular-7bd0007dea5e
@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent {

  schoolForm!: FormGroup;
  school: School = {
    name: 'CSI',
    emailAddress: 'csischool@gmail.com',
    phoneNumber: '+243900051249',
    address: {
      city: 'Lubumbashi',
      country: 'DR Congo',
      state: 'Haut-Congo',
      street: '416, ave.Stars, Annexe'
    },
    students: [
      {
        name: 'Yves K.',
        emailAddress: 'yvesk@gmail.com',
        phoneNumber: '+24687915741',
        skills: [
          {
            name: 'Kotlin',
            level: 7
          },
          {
            name: 'Js',
            level: 6
          }
        ]
      },
      {
        name: 'Jane Doe.',
        emailAddress: 'janedoe@gmail.com',
        phoneNumber: '+246879741741',
        skills: [
          {
            name: 'Photoshop',
            level: 7
          },
          {
            name: 'Illustrator',
            level: 6
          }
        ]
      },
    ]
  }

  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.schoolForm = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      phoneNumber: this.fb.control('', [Validators.required]),
      emailAddress: this.fb.control('', [Validators.required, Validators.pattern('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+[.]+[a-zA-Z.]+$')]),
      address: this.fb.group({
        street: this.fb.control('', [Validators.required]),
        city: this.fb.control('', [Validators.required]),
        state: this.fb.control('', [Validators.required]),
        country: this.fb.control('', [Validators.required])
      }),
      students: this.fb.array([])
    });
  }

  markFormGroupAsTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => control.markAsTouched());
  }

  onSubmit(): void {
    if (this.schoolForm.invalid) {
      // Mark all form controls as touched to trigger validation messages
      this.markFormGroupAsTouched(this.schoolForm);
      return;
    }
    console.log('Form Submit', this.schoolForm.value);
  }

  clearForm(): void {
    this.schoolForm.reset();
  }

  studentArray(): FormArray {
    return this.schoolForm.get('students') as FormArray
  }

  initStudent(): FormGroup {
    return this.fb.group({
      name: '',
      emailAddress: '',
      phoneNumber: '',
      skills: this.fb.array([])
    })
  }

  addStudent(): void {
    this.studentArray().push(this.initStudent());
  }

  removeStudent(studentIndex: number): void {

    this.studentArray().removeAt(studentIndex);
  }

  skillArray(studentIndex: number): FormArray {
    return this.studentArray().at(studentIndex).get('skills') as FormArray
  }

  initSkill(): FormGroup {
    return this.fb.group({
      name: '',
      level: ''
    });
  }

  addSkills(studentIndex: number): void {
    this.skillArray(studentIndex).push(this.initSkill());
  }

  removeSkills(studentIndex: number, skillIndex: number = 0) {
    this.skillArray(studentIndex).removeAt(skillIndex);
  }

  patchForm(): void {
    this.schoolForm.patchValue({
      name: this.school.name,
      emailAddress: this.school.emailAddress,
      phoneNumber: this.school.phoneNumber,
      address: this.schoolForm.get('address')?.patchValue(this.school.address)
    });
    this.patchStudents();
  }

  patchStudents(): void {
    this.school.students?.map((student: any) => {
      // A variable to get this list of Skills
      const skillsArray: FormArray = this.fb.array([]);

      student.skills?.map((skill: any) => {
        skillsArray.push(this.fb.group(skill));
      })

      // A variable to save the list of Skills in a group
      const skillGroup: FormGroup = this.fb.group({
        ...student,
        skills: skillsArray
      });
      this.studentArray().push(skillGroup);
    });
  }

}
