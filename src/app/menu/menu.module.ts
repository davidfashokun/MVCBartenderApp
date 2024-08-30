import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    OrderComponent,
    EditOrderComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MenuModule { }
