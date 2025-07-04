import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string ="http://localhost:3000/locations";
  
  constructor(private http: HttpClient) { }



  getAllLocation(): Observable<any> {
  
      return this.http.get(this.baseUrl);
  
    }

    saveLocation(loc : Location) : Observable<any> {

      return this.http.post(this.baseUrl,loc);
    }
}
