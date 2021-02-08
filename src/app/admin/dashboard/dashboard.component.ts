import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  title = "Admin Dashboard"

  driverUser:any
  customerUser:any
  adminUser:any
  admin:any

  constructor(private titleService:Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    this.admin = JSON.parse(this.adminUser);
  }
}
