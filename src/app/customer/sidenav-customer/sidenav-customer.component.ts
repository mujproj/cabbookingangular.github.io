import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-customer',
  templateUrl: './sidenav-customer.component.html',
  styleUrls: ['./sidenav-customer.component.css']
})
export class SidenavCustomerComponent implements OnInit {

  constructor() { }

  driverUser:any
  customerUser:any
  adminUser:any
  cust:any
  ngOnInit(): void {
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    console.log("SIDE",this.customerUser["username"])
    this.cust = JSON.parse(this.customerUser)
    console.log(this.cust.username)
  }

  toggleSideBar = ()=>{
    if($(".sidebar").is(":visible")){
      $(".sidebar").css("display", "none");
      $(".content").css("margin-left", "0%");
    }
    else{
      $(".sidebar").css("display", "block");
      $(".content").css("margin-left", "20%");
    }
  };
}
