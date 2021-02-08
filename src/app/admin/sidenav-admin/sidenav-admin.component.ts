import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})
export class SidenavAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    this.admin = JSON.parse(this.adminUser)
  }

  driverUser:any
  customerUser:any
  adminUser:any
  admin:any

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
