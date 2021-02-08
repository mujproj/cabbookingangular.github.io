import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CustomerAdd } from 'src/app/models/customeradd';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  title = 'Customer Registration'
  constructor(private titleService: Title, private service: CustomerService) { }

  customer:CustomerAdd | undefined
  adminUser:any;
  customerUser: any;
  driverUser:any;
  message:any
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.adminUser = sessionStorage.getItem('adminuser');
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
  }

  customerAddForm = new FormGroup({
    username : new FormControl('', [Validators.required,
    Validators.minLength(3)]),

    email :new FormControl('',[Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
    ),

    mobileNumber :new FormControl('', [Validators.required,
    Validators.minLength(10),
    Validators.maxLength(12),
    Validators.pattern("^[0-9]+$")]),

    password :new FormControl('', [Validators.required,
    Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")]),

    cpassword :new FormControl('', [Validators.required])
  });


  onSubmit(customerForm: any):boolean{
    let data = customerForm.value
    if(data.password !== this.customerAddForm.value.cpassword){
      alert("Passwords Donot Match");
      return false;
    }
    this.customer = new CustomerAdd(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<CustomerAdd> = this.service.addCustomer(this.customer);
    observable.subscribe((data:CustomerAdd)=>console.log(data), err=>this.message = err.error);
    return true;
  }

}
