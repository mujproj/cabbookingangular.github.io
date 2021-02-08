import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UpdateAdminPassword } from 'src/app/models/updateAdminPassword';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-update-admin-password',
  templateUrl: './update-admin-password.component.html',
  styleUrls: ['./update-admin-password.component.css']
})
export class UpdateAdminPasswordComponent implements OnInit {
  title = "Update Password"
  constructor(private titleService:Title, private service:AdminService, private route:Router) { }

  adMin: UpdateAdminPassword | undefined
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
    if(data.vpass !== this.admin.password){
      console.log(">>>>>>>>>>>>>>>>>",this.adMin?.password)
      alert("Sorry, The original password you entered does not matches with your current profile");
      return false;
    }
    if(data.password !== data.cpassword){
      alert("Sorry, the password does not matches");
      return false;
    }
    this.adMin = new UpdateAdminPassword(this.admin.adminId, data.password);
    let observable = this.service.updateAdmin(this.adMin);
    observable.subscribe((data:any)=>this.success(), err=>this.message = err.error);
    return true;
  }

  success(){
    this.message = "You Have Successfully Updated Your Profile";
    sessionStorage.removeItem('adminuser')
    this.route.navigateByUrl('/loginAdmin').then(() => {
			window.location.reload();
	});
  }

}
