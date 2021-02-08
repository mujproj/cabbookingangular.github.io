import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DriverRate } from 'src/app/models/driverrate';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-rate-driver',
  templateUrl: './rate-driver.component.html',
  styleUrls: ['./rate-driver.component.css']
})
export class RateDriverComponent implements OnInit {

  title = 'Driver Rating'
  constructor(private titleService:Title, private service:DriverService) { }

  driver:DriverRate | undefined
  adminUser:any;
  customerUser: any;
  driverUser:any;
  message:any
  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
  }

  driverRatingForm = new FormGroup({
    driverId : new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    rating : new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$"),
  Validators.max(5)])
  })

  onSubmit(form: any) {
    let data = form.value;
    this.driver = new DriverRate(data.driverId, data.rating)
    let observable = this.service.updateDriver(this.driver);
    observable.subscribe((data:any)=>this.afterRating(data), err=>this.message = err.error)
  }

  afterRating(data: any){
    this.message = "You Have Successfully rated driver with driverId " + data.driverId   
  }
}
