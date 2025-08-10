import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobSeeker } from '../../model/jobseeker.model';

@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {
  private baseUrl = environment.apiBaseUrl+'/jobSeeker/';

  constructor(private http: HttpClient){}

  registerJobSeeker(user:any, jobseeker: any, photo: File): Observable<any> {
    const formData = new FormData();
    formData.append('user', JSON.stringify(user));
    formData.append('jobSeeker', JSON.stringify(jobseeker));
    formData.append('photo', photo);

    return this.http.post(this.baseUrl, formData);
  }


  getProfile(): Observable<JobSeeker> {
    const token = localStorage.getItem('authToken');
    let headers = new HttpHeaders();

    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    return this.http.get<JobSeeker>(`${this.baseUrl}profile`, { headers });
  }

   getAllJobSeeker():Observable<JobSeeker[]>{
  
      return this.http.get<JobSeeker[]>(this.baseUrl);
    }
  
}
