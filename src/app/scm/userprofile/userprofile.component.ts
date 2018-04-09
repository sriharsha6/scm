import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public listId;
  constructor(private route: ActivatedRoute ) { }
  
  list=[
    {
    id:1,
    name:"SriHarsha",
    mobile:"123456789",
    email:"harsha1@gmail.com",
    address:"Plot no 8/197,Madhura nagar colony, Gachibowli, Hyderabad",
    },
    // {
    // id:2,
    // name:"krupa",
    // mobile:"123456789",
    // email:"harsha1@gmail.com",
    // address:"Plot no 8/197,Madhura nagar colony, Gachibowli, Hyderabad",
    // },
    // {
    //   id:3,
    //   name:"Srikanth",
    //   mobile:"123456789",
    //   email:"harsha1@gmail.com",
    //   address:"Plot no 8/197,Madhura nagar colony, Gachibowli, Hyderabad",
    // },
    // {
    //   id:4,
    //   name:"SaiRam",
    //   mobile:"123456789",
    //   email:"harsha1@gmail.com",
    //   address:"Plot no 8/197,Madhura nagar colony, Gachibowli, Hyderabad",
    // },
    // {
    //   id:5,
    //   name:"Bunny",
    //   mobile:"123456789",
    //   email:"harsha1@gmail.com",
    //   address:"Plot no 8/197,Madhura nagar colony, Gachibowli, Hyderabad",
    // }
  ]

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.listId=id;
  }

}
