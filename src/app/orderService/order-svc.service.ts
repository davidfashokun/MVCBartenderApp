import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderInfo } from '../models/order-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderSVCService {

  constructor(private httpClient: HttpClient) { }

  createOrder(formData: OrderInfo) {
    return this.httpClient.post<OrderInfo[]>('http://localhost:3000/orders',formData)
  }
  getOrders() {
    return this.httpClient.get<OrderInfo[]>('http://localhost:3000/orders');
  }
  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.httpClient.patch(`http://localhost:3000/orders/${orderId}`, { status });
  }
}
