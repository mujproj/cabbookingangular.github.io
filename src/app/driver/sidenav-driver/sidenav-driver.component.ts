import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-driver',
  templateUrl: './sidenav-driver.component.html',
  styleUrls: ['./sidenav-driver.component.css']
})
export class SidenavDriverComponent implements OnInit {

  constructor() { }
  driverUser:any
  customerUser:any
  adminUser:any
  driver:any
  ngOnInit(): void {
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    console.log("SIDE",this.customerUser["username"])
    this.driver = JSON.parse(this.driverUser)
    console.log(this.driver.username)
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
