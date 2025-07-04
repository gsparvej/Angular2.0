import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyService } from '../service/company.service';
import { Router } from '@angular/router';
import { Management } from '../../model/management.model';

@Component({
  selector: 'app-add-management',
  standalone: false,
  templateUrl: './add-management.html',
  styleUrl: './add-management.css'
})
export class AddManagement implements OnInit{

  formGroup !: FormGroup;

  constructor(

    private companyService : CompanyService,
    private router : Router,
    private formBuilder : FormBuilder
    
  ){}


  ngOnInit(): void {
   this.formGroup = this.formBuilder.group({

 
    name :[''],
    email : [''],
    designation :[''],
    department : [''],
    contact : [''],



   });
  }


  addManagement(): void {
  const manage : Management = {...this.formGroup.value};
  this.companyService.saveManagement(manage).subscribe({

    next: (res) => {

      console.log(res,'Added Succesfully');
      this.formGroup.reset();
      this.router.navigate(['/viewManagement']);

    },
    error: (err) => {
console.log(err,'Data Not Saved ! Please Check Console')

    }



  });



  }

}
