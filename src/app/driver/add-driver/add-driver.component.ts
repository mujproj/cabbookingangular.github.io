import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DriverAdd } from 'src/app/models/driveradd';
import { DriverService } from 'src/app/service/driver.service';

@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  title = 'Driver Registration'
  constructor(private titleService: Title, private service: DriverService) { }

  driver:DriverAdd | undefined
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

  driverAddForm = new FormGroup({
    username : new FormControl('', [Validators.required,
    Validators.minLength(3)]),

    email :new FormControl('',[Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
    ),

    mobileNumber :new FormControl('', [Validators.required,
    Validators.minLength(10),
    Validators.maxLength(12),
    Validators.pattern("^[0-9]+$")]),

    licenseNo: new FormControl('', Validators.required),

    carType: new FormControl('', Validators.required),

    password :new FormControl('', [Validators.required,
    Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$")]),

    cpassword :new FormControl('', [Validators.required])
  });


  onSubmit(driverForm: any):boolean{
    let data = driverForm.value
    if(data.password !== this.driverAddForm.value.cpassword){
      alert("Passwords Donot Match");
      return false;
    }
    this.driver = new DriverAdd(data.username, data.password, data.mobileNumber, data.email, data.licenseNo, data.carType);
    let observable:Observable<DriverAdd> = this.service.addDriver(this.driver);
    observable.subscribe((data:DriverAdd)=>console.log(data), err=>this.message = err.error);
    return true;
  }
}
