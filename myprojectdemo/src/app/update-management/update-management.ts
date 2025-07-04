import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Management } from '../../model/management.model';
import { CompanyService } from '../service/company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-management',
  standalone: false,
  templateUrl: './update-management.html',
  styleUrl: './update-management.css'
})
export class UpdateManagement implements OnInit {

  id: string = '';
  manage : Management = new Management;


  constructor(

    private companyService : CompanyService,
    private route : ActivatedRoute,
    private cdr : ChangeDetectorRef,
    private router : Router

  ){}
  ngOnInit(): void {
    this.loadManageById();
  }

  loadManageById() {

    this.id = this.route.snapshot.params['id'];
    this.companyService.getManagementById(this.id).subscribe({

      next: (result) => {
        console.log(result,'Data Loaded Successfully !');
        this.manage = result;
        this.cdr.markForCheck(); 

      },
      error: (err) => {

        console.log(err,' Data Does not load');

      }


    })




  }

  updateManage() : void {

    this.companyService.updateManagement(this.id, this.manage).subscribe({

      next: (result) => {

        this.router.navigate(['/viewManagement']);


      },
      error: (err) => {

console.log(err);

      }


    })


  }

}
