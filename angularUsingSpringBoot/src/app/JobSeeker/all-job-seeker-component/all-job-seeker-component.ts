import { Component, OnInit } from '@angular/core';
import { JobSeeker } from '../../../model/jobseeker.model';
import { JobSeekerService } from '../../Service/job-seeker-service';

@Component({
  selector: 'app-all-job-seeker-component',
  standalone: false,
  templateUrl: './all-job-seeker-component.html',
  styleUrl: './all-job-seeker-component.css'
})
export class AllJobSeekerComponent implements OnInit{
  jobseekers: JobSeeker[] = [];

  constructor(
    private jobseekerService: JobSeekerService
  ) {}
  ngOnInit(): void {
    this.loadAllJobSeekers();
  }

  loadAllJobSeekers() {
    this.jobseekerService.getAllJobSeeker().subscribe({
      next: res=> {
        this.jobseekers = res;
      },
      error: err=> {
        console.log(err);
      }
    });
  }
}
