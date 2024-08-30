import { Component } from '@angular/core';
import { OrderSVCService } from './orderService/order-svc.service';
import { OrderInfo } from './models/order-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MVCBartenderApp';
  allOrders: OrderInfo[]=[]

  constructor(private orderSVC: OrderSVCService) {
    this.orderSVC.getOrders().subscribe((data)=>{
      this.allOrders = data;
    })
  }
}
