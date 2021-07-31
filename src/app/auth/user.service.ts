import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static currUser:User;

  static dummyUserList: Array<User> = [
    {
      userId:1,
      name:"Petar",
      surname:"Dimic",
      email:"petar@gmail.com",
      phone:"12345678",
      address:"Srbija",
      personalTags:["test"],
      username:"petar",
      password:"12345",
      cart:{
        cartId:1,
        items:[
          {
            itemId:1,
            quantity:1
          },
          {
            itemId:2,
            quantity:1
          },{
            itemId:3,
            quantity:1
          }
        ]
      }
    },
    {
      userId:2,
      name:"Mika",
      surname:"Mikic",
      email:"mika@gmail.com",
      phone:"12345678",
      address:"Novi Sad",
      personalTags:["test"],
      username:"mika",
      password:"12345",
      cart:{
        cartId:2,
        items:[
          {
            itemId:1,
            quantity:1
          },
          {
            itemId:2,
            quantity:1
          },{
            itemId:3,
            quantity:1
          }
        ]
      }
    },
  ];


  getUsers(){
    return UserService.dummyUserList;
  }
  getCurrUser(){
    return UserService.currUser;
  }
  createUser(newUser: User){
    UserService.dummyUserList.map(user=>{
      if (newUser == user){
        window.alert("Vec imate nalog");
        //router.navigate([login]);
        return;
      }
    })
    UserService.dummyUserList.push(newUser);
    UserService.currUser = newUser;
  }
  updateUser(updated:User){
    UserService.dummyUserList.map(user=>{
      if (user.userId == updated.userId) {
        user = updated;
      }
    })
  }
  removeUser(id:Number){
    let newArr=[];
    UserService.dummyUserList.map(user=>{
      if (user.userId!=id) {
        newArr.push(user);
      }
    })
    UserService.dummyUserList = newArr;
  }
  addTag(tag:String){
    if (UserService.currUser.personalTags.includes(tag.toLowerCase())) {
      window.alert("Vec postoji taj tag");
    }else{
      UserService.dummyUserList.map(user=>{
        if (user.userId == UserService.currUser.userId) {
          user.personalTags.push(tag);
          UserService.currUser = user;
        }
      })
    }
  }
  removeTag(removed:String){
    if (!UserService.currUser.personalTags.includes(removed)){
      window.alert("Tag ne postoji u bazi");
    }else{
      UserService.dummyUserList.map(user=>{
        if (user.userId == UserService.currUser.userId) {
          let newArr=[];
          user.personalTags.map(t=>{
            if (t != removed) {
              newArr.push(t);
            }
          })
          user.personalTags=newArr;
          UserService.currUser.personalTags=newArr;
        }
      })
    }
  }

  isLoggedIn(){
    if (this.getCurrUser()!=null) {
      return true;
    }else{ return false;}
  }

  login(email:String,password:String){

    UserService.dummyUserList.map(user=>{
      if (user.email==email && user.password==password) {
        console.log(user.email==email);
        console.log(user.password==password);

        UserService.currUser = user;
        return user;
      }
    })

  }
  logout(){
    UserService.currUser=null;
  }

  constructor() {
    UserService.currUser = UserService.dummyUserList[0];
  }
}

export interface User{
  userId:Number;
  name:String;
  surname:String;
  email:String;
  phone:String;
  address:string;
  personalTags:String[];
  username:String;
  password:String;
  cart:Cart;
}

export interface Cart{
  cartId:Number;
  items:CartItem[]
}
export interface CartItem{
  itemId: Number;
  quantity: Number;
}
