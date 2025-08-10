import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './User/all-user-component/all-user-component';
import { AddJobseekerComponent } from './JobSeeker/add-jobseeker-component/add-jobseeker-component';
import { AllJobSeekerComponent } from './JobSeeker/all-job-seeker-component/all-job-seeker-component';
import { LoginComponent } from './Auth/login-component/login-component';
import { JobseekerProfileComponent } from './JobSeeker/jobseeker-profile-component/jobseeker-profile-component';

const routes: Routes = [
  {path:'', component: AllUserComponent},
  {path: 'addJobSeeker', component: AddJobseekerComponent},
  {path: 'viewJobSeeker', component: AllJobSeekerComponent},
  {path: 'userLogin', component: LoginComponent},
  {path: 'jobsekpro', component: JobseekerProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
