import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobSeekerService } from '../../Service/job-seeker-service';

@Component({
  selector: 'app-add-jobseeker-component',
  standalone: false,
  templateUrl: './add-jobseeker-component.html',
  styleUrl: './add-jobseeker-component.css'
})
export class AddJobseekerComponent {
  userForm: FormGroup;
  jobSeekerForm: FormGroup;
  photoFile!: File;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private jobSeekerService: JobSeekerService
  ) {
    this.userForm = formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],

    });

    this.jobSeekerForm = formBuilder.group({
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  onPhotoSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.photoFile = event.target.files[0];
      console.log('Selected File : ', this.photoFile);
    }

  }
  onSubmit(): void {

    if (!this.photoFile) {
      this.message = 'Please Upload a Photo.';
      return;
    }
    if (this.userForm.invalid || this.jobSeekerForm.invalid) {
      this.message = 'Please fill out all required fields.';
      return;
    }
    const user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      password: this.userForm.value.password,
      role: 'JOBSEEKER'
    };
    const jobSeeker = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      gender: this.jobSeekerForm.value.gender,
      address: this.jobSeekerForm.value.address,
      dateOfBirth: this.jobSeekerForm.value.dateOfBirth
    };

    this.jobSeekerService.registerJobSeeker(user, jobSeeker, this.photoFile).subscribe({

      next: res => {
        this.message = res.message || 'Registration Succesfully!';
        this.userForm.reset();
        this.jobSeekerForm.reset();
        this.photoFile = undefined!;
      },
      error: err => {
        this.message = 'Registration failed: ' + (err.error?.Message || err.message);
      }
    });


  }

}
