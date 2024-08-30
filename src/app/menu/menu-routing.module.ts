import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {
    path:'',redirectTo:'menu/home',pathMatch:'full'
  },
  {
    path:'menu',redirectTo:'menu/home',pathMatch:'full'
  },
  {
    path:'menu/home', component:HomeComponent
  },
  {
    path:'menu/order',
    component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
