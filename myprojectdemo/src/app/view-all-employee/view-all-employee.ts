import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HrService } from '../service/hr.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-employee',
  standalone: false,
  templateUrl: './view-all-employee.html',
  styleUrl: './view-all-employee.css'
})
export class ViewAllEmployee implements OnInit{

  employee: any;

  constructor(

    private hrService: HrService,
    private cdr: ChangeDetectorRef,
    private router: Router


  ){}

  ngOnInit(): void {
    this.loadAllEmployee();
  }

  loadAllEmployee(){
this.employee = this.hrService.getAllEmoloyee();


  }



  getEmpById(id:string): void{

      this.hrService.getEmployeeById(id).subscribe({

      next: (res) => {

      console.log(res,"Id Get Successfully");
      this.router.navigate(['/updateEmployee',id]);

                    },
      error: (err) => {
      console.log(err);


  }


});


  }



  deleteEmp(id: string ): void {

this.hrService.deleteEmp(id).subscribe({

  next: (res) => {

    this.cdr.reattach();
    this.loadAllEmployee();
  },
  error: (err) => {
    console.log(err);
  }


})

  }

}
