import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { CustomerUpdate } from 'src/app/models/customerupdate';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  title = "Update Customer Profile"
  constructor(private titleService:Title, private service:CustomerService, private route:Router) { }

  updateCustomer:CustomerUpdate | undefined;

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
      this.updateCustomerForm.patchValue({
        username : this.cust.username,
        email: this.cust.email,
        mobileNumber: this.cust.mobileNumber
      })
    }
  }

  updateCustomerForm = new FormGroup({
      username : new FormControl('', [Validators.required,
        Validators.minLength(3)]),
  
      email :new FormControl('',[Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ),
  
      mobileNumber :new FormControl('', [Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12),
        Validators.pattern("^[0-9]+$")])
  });

  onSubmit(form:any){
    let data = form.value;
    this.updateCustomer = new CustomerUpdate(this.cust.customerId, data.username, data.mobileNumber, data.email);
    let observable = this.service.updateCustomer(this.updateCustomer);
    observable.subscribe((data:any)=>this.success(), err=>this.message = err.error);
  }

  success(){
    this.message = "You Have Successfully Updated Your Profile";
    sessionStorage.removeItem('customeruser')
    this.route.navigateByUrl('/loginCustomer').then(() => {
			window.location.reload();
	});
  }
}
