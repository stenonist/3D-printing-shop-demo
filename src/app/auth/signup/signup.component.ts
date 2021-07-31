import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    username: new FormControl('', [
      Validators.required
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    name: new FormControl('', [
      Validators.required
    ]),
    surname: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private user:UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let user:User ={
      userId: UserService.dummyUserList.length++,
      name: this.signupForm.value.name,
      surname: this.signupForm.value.surname,
      address: this.signupForm.value.address,
      phone: this.signupForm.value.phone,
      email: this.signupForm.value.email,
      username: this.signupForm.value.username,
      password: this.signupForm.value.password,
      personalTags: [],
      cart: {
        cartId: UserService.dummyUserList.length++,
        items: []
      }
    }
    this.user.createUser(user);
    this.signupForm.value;
    // set curr user
    //this.userService.createUser({..., cartKey: cartId.$oid, shoppingHistory: [], wishList: [], role: 'user'})
    console.log(this.signupForm.valid);


  }

}
