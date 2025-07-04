import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CompanyService } from '../service/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-management',
  standalone: false,
  templateUrl: './view-all-management.html',
  styleUrl: './view-all-management.css'
})
export class ViewAllManagement implements OnInit{

  management: any;

  constructor(

    private companyService: CompanyService,
    private cdr: ChangeDetectorRef,
    private router: Router


  ){}
  ngOnInit(): void {
    this.loadAllManagement();
  }

  loadAllManagement(){

this.management= this.companyService.getAllManagement();

  }

  deleteManage(id: string): void {

    this.companyService.deleteManagement(id).subscribe({

      next: (res) => {

        console.log("deleted successfully",res);
        this.cdr.reattach();
        this.loadAllManagement();

      },
      error: (err) =>{

        console.log(err);
      }




    });



  }

  getManageById(id:string): void{

      this.companyService.getManagementById(id).subscribe({

      next: (res) => {

      console.log(res,"Id Get Successfully");
      this.router.navigate(['/updateManagement',id]);

                    },
      error: (err) => {
      console.log(err);


  }


});


  }



}
