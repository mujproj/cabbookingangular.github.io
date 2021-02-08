import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-view-customer-profile',
  templateUrl: './view-customer-profile.component.html',
  styleUrls: ['./view-customer-profile.component.css']
})
export class ViewCustomerProfileComponent implements OnInit {

  title = "Your Profile"
  constructor(private titleService:Title, private service:CustomerService) { }

  driverUser:any
  customerUser:any
  adminUser:any
  cust:any
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.customerUser = sessionStorage.getItem('customeruser');
    console.log(">>>>",this.customerUser)
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    this.cust = JSON.parse(this.customerUser)
  }


}
