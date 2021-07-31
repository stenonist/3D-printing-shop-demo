import { Component, OnInit } from '@angular/core';
import { UserService, User } from './auth/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ispit-app';
  currUser:User

  constructor(public user: UserService){
  }

  ngOnInit(): void {
    this.currUser = this.user.getCurrUser();
  }

  logout(){
    UserService.currUser=null;
    this.currUser = null;
  }

}
