import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  baseUrl: string ="http://localhost:3000/employee";
  constructor(private http: HttpClient) { }


  getAllEmoloyee(): Observable<any> {

    return this.http.get(this.baseUrl);

  }

  saveEmployee(emp : Employee) : Observable<any> {

    return this.http.post(this.baseUrl,emp);
  }


  deleteEmp(id: string) : Observable<any> {

return this.http.delete(this.baseUrl+'/'+id);

  }

   getEmployeeById(id: string): Observable<any> {

    return this.http.get(this.baseUrl+'/'+id);
  } 

  updateEmployee(id: string, emp: Employee): Observable<any> {
  
  return this.http.put(this.baseUrl+'/'+id,emp);
    }
}
