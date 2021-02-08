import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminAdd } from '../models/adminadd';
import { Observable } from 'rxjs';
import { LoginUser } from '../models/loginuser';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private client:HttpClient) { }

  baseUrl:string = "http://localhost:8088/admin"

  addAdmin(admin:AdminAdd):Observable<AdminAdd> {
    const url = this.baseUrl +  "/add"
    let observable:Observable<AdminAdd> = this.client.post<AdminAdd>(url, admin);
    return observable;
  }

  adminLogin(admin:LoginUser):Observable<LoginUser> {
    const url = this.baseUrl + "/validateAdmin"
    let observable:Observable<LoginUser> = this.client.post<LoginUser>(url, admin);
    return observable;
  }

  updateAdmin(admin:any) {
    const url = this.baseUrl + `/updateAdmin/${admin.adminId}`
    let observable = this.client.put(url, admin);
    return observable;
  }

}
