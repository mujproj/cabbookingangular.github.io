import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginuser';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  constructor(private titleService: Title, private service: CustomerService ,private route: Router) { }

  title = "Customer Login"
  message:any
  m:any
  adminUser:any;
  customerUser: any;
  driverUser:any;
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.m = sessionStorage.getItem("customeruser")
    console.log(this.m)
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
  }

  loginRequest:LoginUser | undefined

  customerLoginForm = new FormGroup({
    username : new FormControl('', [Validators.required,
      Validators.minLength(3)]),
    
    password :new FormControl('', Validators.required)
  })

  onSubmit(form:any) {
    let data = form.value;
    this.loginRequest = new LoginUser(data.username, data.password);
    let observable = this.service.customerLogin(this.loginRequest);
    observable.subscribe((data:any)=>this.login(data), err=>this.message = err.error);
  }

  login(data: any){
    sessionStorage.setItem("customeruser", JSON.stringify(data));
    this.route.navigateByUrl('/customerDashboard').then(() => {
			window.location.reload();
	});
  }
}
