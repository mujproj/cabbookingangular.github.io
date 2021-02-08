import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NavComponent } from './nav/nav.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { DriverLoginComponent } from './driver/driver-login/driver-login.component';
import { AddCustomerComponent } from './customer/add-customer/add-customer.component';
import { CustomerService } from './service/customer.service';
import { DriverService } from './service/driver.service';
import { AddDriverComponent } from './driver/add-driver/add-driver.component';
import { SidenavCustomerComponent } from './customer/sidenav-customer/sidenav-customer.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import * as $ from 'jquery';
import { ViewCustomerProfileComponent } from './customer/view-customer-profile/view-customer-profile.component';
import { RateDriverComponent } from './driver/rate-driver/rate-driver.component';
import { ViewBestDriversComponent } from './driver/view-best-drivers/view-best-drivers.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { UpdatePasswordComponent } from './customer/update-password/update-password.component';
import { ViewAllCustomersComponent } from './customer/view-all-customers/view-all-customers.component';
import { ForgetCustomerPasswordComponent } from './customer/forget-customer-password/forget-customer-password.component';
import { SidenavAdminComponent } from './admin/sidenav-admin/sidenav-admin.component';
import {AdminDashboardComponent} from './admin/dashboard/dashboard.component';
import { ForgetAdminPasswordComponent } from './admin/forget-admin-password/forget-admin-password.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { UpdateAdminPasswordComponent } from './admin/update-admin-password/update-admin-password.component';
import { ViewAdminByIdComponent } from './admin/view-admin-by-id/view-admin-by-id.component';
import { SidenavDriverComponent } from './driver/sidenav-driver/sidenav-driver.component';
import { DriverDashboardComponent } from './driver/driver-dashboard/driver-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdminComponent,
    HomeComponent,
    AdminLoginComponent,
    NavComponent,
    CustomerLoginComponent,
    DriverLoginComponent,
    AddCustomerComponent,
    AddDriverComponent,
    SidenavCustomerComponent,
    DashboardComponent,
    ViewCustomerProfileComponent,
    RateDriverComponent,
    ViewBestDriversComponent,
    UpdateCustomerComponent,
    UpdatePasswordComponent,
    ViewAllCustomersComponent,
    ForgetCustomerPasswordComponent,
    SidenavAdminComponent,
    AdminDashboardComponent,
    ForgetAdminPasswordComponent,
    UpdateAdminComponent,
    UpdateAdminPasswordComponent,
    ViewAdminByIdComponent,
    SidenavDriverComponent,
    DriverDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [Title, AdminService, CustomerService, DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
