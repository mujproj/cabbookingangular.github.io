import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminAdd } from 'src/app/models/adminadd';
import { AdminService } from 'src/app/service/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  title = 'Admin Registration'
  constructor(private titleService: Title, private service: AdminService) { }

  admin:AdminAdd | undefined
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

  adminAddForm = new FormGroup({
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


  onSubmit(adminForm: any):boolean{
    let data = adminForm.value
    if(data.password !== this.adminAddForm.value.cpassword){
      alert("Passwords Donot Match");
      return false;
    }
    this.admin = new AdminAdd(data.username, data.password, data.mobileNumber, data.email);
    let observable:Observable<AdminAdd> = this.service.addAdmin(this.admin);
    observable.subscribe((data:AdminAdd)=>console.log(data), err=>this.message = err.error);
    return true;
  }
}
