import { RegistrationComponent } from './../../components/registration/registration.component';
import { RouterModule,Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRouteRoutingModule } from './main-route-routing.module';
import {ChartComponent} from './../../components/chart/chart.component';

const appRoute:Routes= [
    { path: 'login', component:RegistrationComponent},
    { path:'charts', component:ChartComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    MainRouteRoutingModule,
    RouterModule.forRoot(appRoute)   
  ],
  declarations: [],
  exports:[
    RouterModule
  ]
})
export class MainRouteModule { 
  
}
