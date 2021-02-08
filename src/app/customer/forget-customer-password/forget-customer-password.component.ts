import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-forget-customer-password',
  templateUrl: './forget-customer-password.component.html',
  styleUrls: ['./forget-customer-password.component.css']
})
export class ForgetCustomerPasswordComponent implements OnInit {

  title = "Forgot Password"
  constructor(private titleService:Title, private service:CustomerService) { }

  driverUser:any
  customerUser:any
  adminUser:any
  ngOnInit(): void {
    this.titleService.setTitle(this.title)
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
  }

  



}
