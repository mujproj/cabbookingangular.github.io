import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-view-admin-by-id',
  templateUrl: './view-admin-by-id.component.html',
  styleUrls: ['./view-admin-by-id.component.css']
})
export class ViewAdminByIdComponent implements OnInit {

  title = "Your Profile"
  constructor(private titleService:Title) { }

  driverUser:any
  customerUser:any
  adminUser:any
  admin:any
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.customerUser = sessionStorage.getItem('customeruser');
    console.log(">>>>",this.customerUser)
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    this.admin = JSON.parse(this.adminUser)
  }

}
