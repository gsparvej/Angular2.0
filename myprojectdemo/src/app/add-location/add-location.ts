import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';
import { Location } from '../../model/location.model';

@Component({
  selector: 'app-add-location',
  standalone: false,
  templateUrl: './add-location.html',
  styleUrl: './add-location.css'
})
export class AddLocation {

   formGroup !: FormGroup;


  constructor(
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }


  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      name: [''],    
      photo: ['']

    });


  }


  addLocation(): void {

    const loc: Location = { ...this.formGroup.value };

     this.locationService.saveLocation(loc).subscribe({

    next: (res) => {

      console.log("Location Saved ", res);
      this.formGroup.reset();
      this.router.navigate(['/allloc']);

    },

      error: (error) => {

        console.log(error);

      }



  })
}

}
