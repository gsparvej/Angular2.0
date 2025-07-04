import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-all-location',
  standalone: false,
  templateUrl: './view-all-location.html',
  styleUrl: './view-all-location.css'
})
export class ViewAllLocation implements OnInit{

  location : any;

  constructor(

    private locationService: LocationService,
    private cdr: ChangeDetectorRef,
    private router: Router

  ){}

  ngOnInit(): void {
   this.loadAllLocation();
  }

  loadAllLocation(){

this.location = this.locationService.getAllLocation();


  }

}
