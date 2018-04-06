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
import {CommonModule} from '@angular/common';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


const routes: Routes = [
  { path:'dashboard', component:DashboardComponent,children:[
    { path:'calender',component:CalenderComponent },
    { path:'products',component:ProductsComponent },
    { path:'users',component:UsersComponent },
    { path:'dashboardhome',component:DashboardhomeComponent },
    { path:'personaldetails',component:PersonaldetailsComponent },
    { path:'userregistration',component:UserregistrationComponent },
  ] },

];

@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    CalenderComponent,
    ProductsComponent,
    DashboardhomeComponent,
    PersonaldetailsComponent,
    UserregistrationComponent,
  ],
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ],
  exports:[RouterModule], 
  providers: [CalenderService,DashboardService,ProductsService,UsersService],
})
export class ScmModule { }
