import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerAdd } from '../models/customeradd';
import { LoginUser } from '../models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private client:HttpClient) { }

  baseUrl:string = "http://localhost:8088/customer"

  addCustomer(admin:CustomerAdd):Observable<CustomerAdd> {
    const url = this.baseUrl +  "/addCustomer"
    let observable:Observable<CustomerAdd> = this.client.post<CustomerAdd>(url, admin);
    return observable;
  }

  customerLogin(customer:LoginUser):Observable<LoginUser> {
    const url = this.baseUrl + "/validateCustomer"
    let observable:Observable<LoginUser> = this.client.post<LoginUser>(url, customer);
    return observable;
  }

  viewProfile(customerId:number):any{
    const url = this.baseUrl + `/getCustomerDetails/${customerId}`
    let observable:any = this.client.get(url);
    return observable;
  }

  updateCustomer(customer:any) {
    const url = this.baseUrl + `/updateCustomer/${customer.customerId}`
    let observable = this.client.put(url, customer);
    return observable;
  }

  viewAllCustomers(){
    const url = this.baseUrl + "/allCustomers";
    let observable = this.client.get(url);
    return observable;
  }

  deleteCustomers(id:any){
    const url = this.baseUrl + `/deleteCustomer/${id}`;
    let observable = this.client.delete(url);
    return observable;
  }
  
}
