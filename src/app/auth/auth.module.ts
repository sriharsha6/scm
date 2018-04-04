import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SetpasswordComponent } from './setpassword/setpassword.component';
import { LoginService } from './login/login.service';
import { SetpasswordService } from './setpassword/setpassword.service';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
      {path:'', redirectTo:'login',pathMatch:'full' },
      { path: 'login', component: LoginComponent},
      { path:'setpassword', component: SetpasswordComponent}
]; 

@NgModule({
  declarations: [
    LoginComponent,
    SetpasswordComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule
    ],
  exports:[RouterModule], 
  providers: [LoginService,SetpasswordService]
})
export class AuthModule { }
