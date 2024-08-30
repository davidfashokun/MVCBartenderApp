import { Component } from '@angular/core';
import { MenuInfo } from '../../models/menu-info';
import { MenuServiceService } from '../services/menu-service.service';
import { OrderSVCService } from '../../orderService/order-svc.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrderConfirmationDialogComponent } from '../../order-confirmation-dialog/order-confirmation-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  formdata = {
    id:"",
    customerName:"",
    drinkName:[],
    status:"Pending",
    orderTime: this.getDateNow(),
    quantity:0
  }
  currentDate : Date = new Date()
  allDrinks : MenuInfo[] = []
  constructor(private dialog: MatDialog, private menuSVC: MenuServiceService, private orderSVC: OrderSVCService, private router: Router){
    this.menuSVC.getMenuDrinks().subscribe((data)=>{
      this.allDrinks=data;
    });
  }

  
  placeOrder () {

    this.orderSVC.createOrder(this.formdata).subscribe({
      error: (err) => {
        console.error('Error placing order:', err);
        alert('An error occurred while you tried to place this order. Please try again.');
      }
    });
    this.openOrderConfirmation();
    this.router.navigate(['/menu/home'])
  }
  ngOnInit(): void {
    this.initializeId();
  }

  async initializeId(): Promise<void> {
    try {
      const drinks = await this.orderSVC.getOrders().toPromise();
      let highestID = 0;
      
      drinks?.forEach((drink) => {
        const currentID = Number(drink.id);
        if (currentID > highestID) {
          highestID = currentID;
        }
      });
      
      this.formdata.id = (highestID + 1).toString();
    } catch (error) {
      console.error('Error fetching drinks:', error);
      alert('An error occurred while initializing ID. Please try again.');
    }
  }

  getDateNow(): string {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      return `${hours}:${minutes}:${seconds}`;
   }
   openOrderConfirmation(): void {
    this.dialog.open(OrderConfirmationDialogComponent, {
      width: '300px',
    });
  }
    

}
