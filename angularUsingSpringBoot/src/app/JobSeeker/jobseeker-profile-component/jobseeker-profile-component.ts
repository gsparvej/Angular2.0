import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JobSeeker } from '../../../model/jobseeker.model';
import { JobSeekerService } from '../../Service/job-seeker-service';

@Component({
  selector: 'app-jobseeker-profile-component',
  standalone: false,
  templateUrl: './jobseeker-profile-component.html',
  styleUrl: './jobseeker-profile-component.css'
})
export class JobseekerProfileComponent implements OnInit{

  jobSeeker?: JobSeeker;

   constructor(
    private jobSeekerService: JobSeekerService,
     private cdr:ChangeDetectorRef
    ) {}
  ngOnInit(): void {
     this.jobSeekerService.getProfile().subscribe({
      next: (data) => {
        this.jobSeeker = data;
        console.log(data);
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.error('Failed to load profile', err);
      }
    });
  
  }

}
