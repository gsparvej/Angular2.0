import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HrService } from '../service/hr.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee.model';


@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit{

  formGroup! : FormGroup;

  constructor(
private hrService : HrService,
private cdr : ChangeDetectorRef,
private router : Router,
private formBuilder : FormBuilder


  ){}
  ngOnInit(): void {
      this.formGroup = this.formBuilder.group({

 
    name :[''],
    designation :[''],
    department : [''],
    startDate : [''],
    contact : [''],
    salary : [''],

   });
  }

  addEmp(): void {
const emp : Employee = {...this.formGroup.value};
this.hrService.saveEmployee(emp).subscribe({

  next: (employee) => {
    console.log(employee,'added Successfully ! ');
    this.formGroup.reset();
    this.router.navigate(['/viewEmp']);
  },
  error: (err) => {
    console.log(err);
  }


})


  }

}
