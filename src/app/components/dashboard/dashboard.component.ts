import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

/*
This component should be main layout for all type of users,
but I didnt make it in time, so now its just entry (dumb) comp of app
*/
export class DashboardComponent implements OnInit {
  isCollapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
}
