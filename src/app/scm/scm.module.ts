import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { CalenderComponent } from './calender/calender.component';
import { ProductsComponent } from './products/products.component';
import { CalenderService } from './calender/calender.service';
import { DashboardService } from './dashboard/dashboard.service';
import { ProductsService } from './products/products.service';
import { UsersService } from './users/users.service';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


const routes: Routes = [
  { path:'dashboard', component:DashboardComponent,children:[
    { path:'calender',component:CalenderComponent },
    { path:'products',component:ProductsComponent },
    { path:'users',component:UsersComponent },
    { path:'dashboardhome',component:DashboardhomeComponent }
  ] },

];

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductsComponent,
    DashboardhomeComponent,
  ],
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    MatButtonModule
    ],
  exports:[RouterModule], 
  providers: [CalenderService,DashboardService,ProductsService,UsersService],
})
export class ScmModule { }
