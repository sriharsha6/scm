import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  Name = new FormControl('',[Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  createnewpassword = new FormControl('', [Validators.required]);
  confirmpassword = new FormControl('',[Validators.required]);
  mobile = new FormControl('',[Validators.required]);
getErrorName() {
    return this.email.hasError('required') ? 'Name required' :
            '';
  }
getErrorMessage() {
    return this.email.hasError('required') ? 'Email required' :
            '';
  }
getErrorMobile(){
    return this.mobile.hasError('required') ? 'Phone.no required' :
            '';
  }
  getpasswordMessage() {
    return this.createnewpassword.hasError('required') ? 'Password required' :
    this.createnewpassword.hasError('email') ? 'Not a valid createnewpassword' :
            '';
  }
  getpassword1Message() {
    return this.confirmpassword.hasError('required') ? 'Password required' :
        
            '';

  }
  hide = true;
  hide1 = true;
  
  constructor() { }

  ngOnInit() {
  }

}
