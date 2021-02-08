import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { ForgetCustomerPasswordComponent } from './customer/forget-customer-password/forget-customer-password.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { UpdatePasswordComponent } from './customer/update-password/update-password.component';
import { ViewAllCustomersComponent } from './customer/view-all-customers/view-all-customers.component';
import { ViewCustomerProfileComponent } from './customer/view-customer-profile/view-customer-profile.component';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { DriverLoginComponent } from './driver/driver-login/driver-login.component';
import { RateDriverComponent } from './driver/rate-driver/rate-driver.component';
import { ViewBestDriversComponent } from './driver/view-best-drivers/view-best-drivers.component';
import { HomeComponent } from './home/home.component';
import {AdminDashboardComponent} from './admin/dashboard/dashboard.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { UpdateAdminPasswordComponent } from './admin/update-admin-password/update-admin-password.component';
import { ViewAdminByIdComponent } from './admin/view-admin-by-id/view-admin-by-id.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'registerAdmin', component:AddAdminComponent},
  {path: 'loginAdmin', component:AdminLoginComponent},
  {path: 'loginCustomer', component:CustomerLoginComponent},
  {path: 'loginDriver', component:DriverLoginComponent},
  {path: 'registerCustomer', component:AddCustomerComponent},
  {path: 'registerDriver', component:AddDriverComponent},
  {path: 'customerDashboard', component:DashboardComponent},
  {path: 'viewCustomerProfile', component:ViewCustomerProfileComponent},
  {path: 'rateDriver', component:RateDriverComponent},
  {path: 'bestDrivers', component:ViewBestDriversComponent},
  {path: 'updateCustomer', component:UpdateCustomerComponent},
  {path: 'updateCustomerPassword', component:UpdatePasswordComponent},
  {path: 'viewAllCustomers', component:ViewAllCustomersComponent},
  {path: 'forgetCustomerPassword', component:ForgetCustomerPasswordComponent},
  {path: 'adminDashboard', component:AdminDashboardComponent},
  {path: 'updateAdmin', component:UpdateAdminComponent},
  {path: 'updateAdminPassword', component:UpdateAdminPasswordComponent},
  {path: 'viewAdminProfile', component:ViewAdminByIdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
