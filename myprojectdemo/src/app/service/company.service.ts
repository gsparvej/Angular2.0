import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Management } from '../../model/management.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  baseUrl: string ="http://localhost:3000/management";

  constructor(private http: HttpClient) { }

  getAllManagement(): Observable<any>{

    return this.http.get(this.baseUrl);

  }
  deleteManagement(id: string): Observable<any> {

    return this.http.delete(this.baseUrl+'/'+id);
  }


  saveManagement(manage: Management) : Observable<any> {

    return this.http.post(this.baseUrl,manage);
  }

  getManagementById(id: string): Observable<any> {

    return this.http.get(this.baseUrl+'/'+id);
  }
  updateManagement(id: string, management: Management): Observable<any> {

return this.http.put(this.baseUrl+'/'+id,management);
  }


}
