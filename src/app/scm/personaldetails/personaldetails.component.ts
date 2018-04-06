import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {
  userName = new FormControl('',[Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  mobile = new FormControl('',[Validators.required]);
  locality = new FormControl('',[Validators.required]);
  flat = new FormControl('',[Validators.required]);
  city = new FormControl('',[Validators.required]);
  state = new FormControl('',[Validators.required]);
  pincode = new FormControl('',[Validators.required]);
  community = new FormControl('', [Validators.required]);
  subcommunity = new FormControl('', [Validators.required]);

  getErrorcommunity(){
    return this.community.hasError('required') ? 'community required' :
    '';
  }
  getErrorsubcommunity(){
    return this.subcommunity.hasError('required') ? 'subcommunity required' :
    '';
  }

getErroruserName() {
    return this.userName.hasError('required') ? 'Name required' :
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
getErrorlocality(){
  return this.locality.hasError('required') ? ' locality required' :
            '';
}
getErrorflat(){
  return this.flat.hasError('required') ? ' flat.no required' :
            '';
}
getErrorcity(){
  return this.city.hasError('required') ? ' city required' :
            '';
}
getErrorstate(){
  return this.state.hasError('required') ? ' state required' :
            '';
}
getErrorpincode(){
  return this.pincode.hasError('required') ? ' pincode required' :
            '';
}
  constructor() { }

  ngOnInit() {
  }

}
