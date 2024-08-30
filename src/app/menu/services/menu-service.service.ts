import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MenuInfo } from '../../models/menu-info';
import { OrderInfo } from '../../models/order-info';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  constructor(private httpClient: HttpClient) { }

  getMenuDrinks() {
    return this.httpClient.get<MenuInfo[]>('http://localhost:3000/menu')
  }
}
