import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  adminUser:any;
  customerUser: any;
  driverUser:any;

  constructor(private route:Router) {
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    console.log(this.adminUser)
    console.log(".opooppo")
    console.log(">>>||",this.customerUser)
   }

  ngOnInit(): void {
  }

  adminLogout(){
    sessionStorage.removeItem('adminuser');
    
  }

  customerLogout(){
    sessionStorage.removeItem('customeruser');
    this.route.navigateByUrl('/loginCustomer').then(() => {
			window.location.reload();
	});
  }

  driverLogout(){
    sessionStorage.removeItem('driveruser');
  }

}
