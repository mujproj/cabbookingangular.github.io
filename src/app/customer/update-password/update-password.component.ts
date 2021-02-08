import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UpdateCustomerPassword } from 'src/app/models/updateCustomerPassword';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  title = "Update Password"
  constructor(private titleService:Title, private service:CustomerService, private route:Router) { }

  customer: UpdateCustomerPassword | undefined
  driverUser:any
  customerUser:any
  adminUser:any
  cust:any
  message:any
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    if(this.customerUser !== null){
      this.cust = JSON.parse(this.customerUser);
    }
  }

  updatePasswordForm = new FormGroup({
    vpass : new FormControl('', Validators.required),
    password :new FormControl('', [Validators.required,
      Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")]),
  
    cpassword :new FormControl('', [Validators.required])

  })
  onSubmit(form:any):boolean{
    let data = form.value;
    if(data.vpass !== this.cust.password){
      console.log(">>>>>>>>>>>>>>>>>",this.customer?.password)
      alert("Sorry, The original password you entered does not matches with your current profile");
      return false;
    }
    if(data.password !== data.cpassword){
      alert("Sorry, the password does not matches");
      return false;
    }
    this.customer = new UpdateCustomerPassword(this.cust.customerId, data.password);
    let observable = this.service.updateCustomer(this.customer);
    observable.subscribe((data:any)=>this.success(), err=>this.message = err.error);
    return true;
  }

  success(){
    this.message = "You Have Successfully Updated Your Profile";
    sessionStorage.removeItem('customeruser')
    this.route.navigateByUrl('/loginCustomer').then(() => {
			window.location.reload();
	});
  }

}
