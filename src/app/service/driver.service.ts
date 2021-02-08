import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverAdd } from '../models/driveradd';
import { DriverUpdate } from '../models/driverupdate';
import { LoginUser } from '../models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private client:HttpClient) { }

  baseUrl:string = "http://localhost:8088/driver"

  addDriver(driver:DriverAdd):Observable<DriverAdd> {
    const url = this.baseUrl +  "/addDriver"
    let observable:Observable<DriverAdd> = this.client.post<DriverAdd>(url, driver);
    return observable;
  }

  driverLogin(driver:LoginUser):Observable<LoginUser> {
    const url = this.baseUrl + "/validateDriver"
    let observable:Observable<LoginUser> = this.client.post<LoginUser>(url, driver);
    return observable;
  }

  updateDriver(driver:any):Observable<DriverUpdate>{
    const url = this.baseUrl + `/updateDriver/${driver.driverId}`
    let observable:Observable<DriverUpdate> = this.client.put<DriverUpdate>(url, driver);
    return observable;
  }

  bestDrivers(){
    const url = this.baseUrl + "/bestDrivers";
    let observable = this.client.get(url);
    return observable
  }
}
