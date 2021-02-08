import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAdd } from './models/adminadd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cabbookingsystem';
  constructor(private route:Router){
    
  }
  ngOnInit(): void {
  }

}
