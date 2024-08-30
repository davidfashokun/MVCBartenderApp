import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';
import { OrderQueueComponent } from './order-queue/order-queue.component';

const routes: Routes = [
  {
    path: 'order-queue',
    component: OrderQueueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
