import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminUpdate } from 'src/app/models/adminupdate';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {
  title = "Update Admin Profile"
  constructor(private titleService:Title, private service:AdminService, private route:Router) { }

  updateAdmin:AdminUpdate | undefined;

  driverUser:any
  customerUser:any
  adminUser:any
  admin:any
  message:any

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.customerUser = sessionStorage.getItem('customeruser');
    this.driverUser = sessionStorage.getItem('driveruser');
    this.adminUser = sessionStorage.getItem('adminuser');
    if(this.adminUser !== null){
      this.admin = JSON.parse(this.adminUser);
      this.updateAdminForm.patchValue({
        username : this.admin.username,
        email: this.admin.email,
        mobileNumber: this.admin.mobileNumber
      })
    }
  }

  updateAdminForm = new FormGroup({
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
    this.updateAdmin = new AdminUpdate(this.admin.adminId, data.username, data.mobileNumber, data.email);
    let observable = this.service.updateAdmin(this.updateAdmin);
    observable.subscribe((data:any)=>this.success(), err=>this.message = err.error);
  }

  success(){
    this.message = "You Have Successfully Updated Your Profile";
    sessionStorage.removeItem('adminuser')
    this.route.navigateByUrl('/loginAdmin').then(() => {
			window.location.reload();
	});
  }
}
