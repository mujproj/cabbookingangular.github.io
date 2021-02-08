import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-view-best-drivers',
  templateUrl: './view-best-drivers.component.html',
  styleUrls: ['./view-best-drivers.component.css']
})
export class ViewBestDriversComponent implements OnInit {

  title = "Best Drivers"
  constructor(private titleService:Title, private service:DriverService) { }

  adminUser:any;
  customerUser:any;
  driverUser:any;
  bestDrivers:any;
  message:any;

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    let observable = this.service.bestDrivers();
    observable.subscribe((data:any)=> this.bestDrivers = data, err=>this.message = err.error);
  }

}
