import { Component, OnInit } from '@angular/core';
import { FormControl,Validators,FormGroup } from '@angular/forms';



@Component({
  selector: 'app-setpassword',
  templateUrl: './setpassword.component.html',
  styleUrls: ['./setpassword.component.css']
})
export class SetpasswordComponent implements OnInit {
    createnewpassword = new FormControl('', [Validators.required]);
    confirmpassword = new FormControl('',[Validators.required]);
    getErrorMessage() {
      return this.createnewpassword.hasError('required') ? 'Password required' :
      this.createnewpassword.hasError('email') ? 'Not a valid createnewpassword' :
              '';
    }
    getpasswordMessage() {
      return this.confirmpassword.hasError('required') ? 'Password required' :
          
              '';
    }
    hide = true;


  constructor() { }

  ngOnInit() {
  }

}
