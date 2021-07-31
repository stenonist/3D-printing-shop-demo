import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    password: new FormControl('', [
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  errorExists = false;
  errorMessage = '';


  constructor(private user:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let user = this.user.login(this.loginForm.value.email,this.loginForm.value.password);
    console.log(UserService.currUser);
    if (UserService.currUser==null) {
      window.alert("bad parametars");
      this.loginForm.reset();
    }else{

      this.router.navigate(["/"])
    }
  }
}
