import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = "Customer Dashboard"

  driverUser:any
  customerUser:any
  adminUser:any
  cust:any

  constructor(private titleService:Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.customerUser = sessionStorage.getItem('customeruser');
    console.log(">>>>",this.customerUser)
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    this.cust = JSON.parse(this.customerUser)
  }

}
