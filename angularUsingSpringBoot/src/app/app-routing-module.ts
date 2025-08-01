import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './User/all-user-component/all-user-component';
import { AddJobseekerComponent } from './JobSeeker/add-jobseeker-component/add-jobseeker-component';

const routes: Routes = [
  {path:'', component: AllUserComponent},
  {path: 'addJobSeeker', component: AddJobseekerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
