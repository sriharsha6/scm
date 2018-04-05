import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
