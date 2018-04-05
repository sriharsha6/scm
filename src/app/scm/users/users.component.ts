import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  list=[
  {
  id:1,
  name:"SriHarsha",
  mobile:"1223456789",
  email:"harsha1@gmail.com",
  address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
  paymentDue:"Payment Due",
  amount:"$1500"
  },
 {
  id:2,
  name:"krupa",
  mobile:"123456789",
  email:"harsha2@gmail.com",
  address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
  paymentDue:"Payment Due",
  amount:"$1500"
 }, 
{
  id:3,
  name:"Srikanth",
  mobile:"123456789",
  email:"harsha3@gmail.com",
  address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
  paymentDue:"Payment Due",
  amount:"$1500"
},
{
  id:4,
  name:"Sairam",
  mobile:"123456789",
  email:"harsha4@gmail.com",
  address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
  paymentDue:"Payment Due",
  amount:"$1500"
},
{
  id:5,
  name:"Bunny",
  mobile:"123456789",
  email:"harsha5@gmail.com",
  address:"Plot no 8/197, Sai shathi men's hostel,Madhura nagar colony, Gachibowli, Hyderabad,500032",
  paymentDue:"Payment Due",
  amount:"$1500"
}

]

  constructor() { }

  ngOnInit() {
  }

}
