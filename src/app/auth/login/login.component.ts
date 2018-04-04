import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('',[Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'Email required' :
            '';
  }
  getpasswordMessage() {
    return this.password.hasError('required') ? 'Password required' :
        
            '';
  }
  hide = true;
  constructor() { }

  ngOnInit() {
  }

}
