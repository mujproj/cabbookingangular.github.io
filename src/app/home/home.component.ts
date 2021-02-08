import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home';
  constructor(private titleService: Title) { }
  
  adminUser:any;
  customerUser: any;
  driverUser:any;
  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.adminUser = sessionStorage.getItem('adminuser');
  }  

}
