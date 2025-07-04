import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { HrService } from '../service/hr.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  templateUrl: './update-employee.html',
  styleUrl: './update-employee.css'
})
export class UpdateEmployee implements OnInit {

  id: string = '';
  employee : Employee = new Employee;

  constructor(
private hrService : HrService,
  private route : ActivatedRoute,
    private cdr : ChangeDetectorRef,
    private router : Router 

  ){}


  ngOnInit(): void {
    this.loadEmployeeById();
  }

  loadEmployeeById() {

    this.id = this.route.snapshot.params['id'];
    this.hrService.getEmployeeById(this.id).subscribe({

      next: (emp) => {

        this.employee = emp;
        this.cdr.markForCheck();

      },
      error: (err) => {
        console.log(err);
      }


    })




  }

  updateEmp() : void {
this.hrService.updateEmployee(this.id,this.employee).subscribe({
next: (result) => {
this.router.navigate(['/viewEmp']);


},
error: (err) => {

  console.log(err);
}





})



  }

}
