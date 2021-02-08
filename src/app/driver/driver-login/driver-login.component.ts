import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginuser';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.css']
})
export class DriverLoginComponent implements OnInit {

  constructor(private titleService: Title, private service: DriverService, private route: Router) { }
  title = "Driver Login"
  message:any
  m:any
  adminUser:any;
  customerUser: any;
  driverUser:any;
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.m = sessionStorage.getItem("driveruser")
    console.log(this.m)
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
  }

  loginRequest:LoginUser | undefined

  driverLoginForm = new FormGroup({
    username : new FormControl('', [Validators.required,
      Validators.minLength(3)]),
    
    password :new FormControl('', Validators.required)
  })

  onSubmit(form:any) {
    let data = form.value;
    this.loginRequest = new LoginUser(data.username, data.password);
    let observable = this.service.driverLogin(this.loginRequest);
    observable.subscribe((data:any)=>this.login(data), err=>this.message = err.error);
  }

  login(data: any){
    sessionStorage.setItem("driveruser", JSON.stringify(data));
    this.route.navigateByUrl('/').then(() => {
			window.location.reload();
	});
  }
}
