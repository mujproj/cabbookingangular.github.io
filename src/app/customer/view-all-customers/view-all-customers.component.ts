import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-view-all-customers',
  templateUrl: './view-all-customers.component.html',
  styleUrls: ['./view-all-customers.component.css']
})
export class ViewAllCustomersComponent implements OnInit {

  title = "All Customers"
  constructor(private titleService:Title, private service:CustomerService, private route:Router) { }
  adminUser:any;
  customerUser: any;
  driverUser:any;
  message:any
  customers:any;
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    let observable = this.service.viewAllCustomers();
    observable.subscribe((data:any)=>this.customers = data, err=>this.message = err.error);
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
  }

  deleteCustomer(id:number){
    let resp = this.service.deleteCustomers(id);
    resp.subscribe((data:any)=>console.log(data));
    this.route.navigateByUrl('/viewAllCustomers').then(() => {
			window.location.reload();
	});
  }

}
