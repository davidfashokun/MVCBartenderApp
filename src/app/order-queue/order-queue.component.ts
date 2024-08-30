import { Component, OnInit } from '@angular/core';
import { OrderSVCService } from '../orderService/order-svc.service';
import { OrderInfo } from '../models/order-info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-queue',
  templateUrl: './order-queue.component.html',
  styleUrl: './order-queue.component.css'
})
export class OrderQueueComponent implements OnInit {
  allOrders: OrderInfo[]=[]

  constructor(private orderSvc: OrderSVCService, private router: Router) {

  }
  ngOnInit(): void {
    this.orderSvc.getOrders().subscribe((data:OrderInfo[])=>{
      this.allOrders = data;
    })
  }

  setOrderReady(orderId: string): void {
    this.orderSvc.updateOrderStatus(orderId, 'Ready for Pickup').subscribe(() => {
      this.orderSvc.getOrders();
      this.ngOnInit();
      // this.router.navigateByUrl('/order-queue')
    });
  }
}
