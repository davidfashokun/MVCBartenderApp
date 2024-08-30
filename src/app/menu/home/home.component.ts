import { Component, OnInit } from '@angular/core';
import { MenuInfo } from '../../models/menu-info';
import { MenuServiceService } from '../services/menu-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allDrinks: MenuInfo[]= []
  constructor(private menuSvc: MenuServiceService){}


  ngOnInit(): void {
    this.menuSvc.getMenuDrinks().subscribe((data)=>{
      this.allDrinks=data;
    })
  }

}
