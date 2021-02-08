import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginuser';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private titleService: Title, private service: AdminService, private route:Router) { }

  title = "Admin Login"
  message:any
  m:any
  adminUser:any;
  customerUser: any;
  driverUser:any;
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.m = sessionStorage.getItem("adminuser")
    console.log(this.m)
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
  }

  loginRequest:LoginUser | undefined

  adminLoginForm = new FormGroup({
    username : new FormControl('', [Validators.required,
      Validators.minLength(3)]),
    
    password :new FormControl('', Validators.required)
  })
  
  onSubmit(form:any) {
    let data = form.value;
    this.loginRequest = new LoginUser(data.username, data.password);
    let observable = this.service.adminLogin(this.loginRequest);
    observable.subscribe((data:any)=>this.login(data), err=>this.message = err.error);
  }

  login(data: any){
    sessionStorage.setItem("adminuser", JSON.stringify(data));
    this.route.navigateByUrl('/adminDashboard').then(() => {
			window.location.reload();
	});
  }
}
