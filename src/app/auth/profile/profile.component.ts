import { Component, OnInit } from '@angular/core';
import { User, UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopService } from 'src/app/shop/shop.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  tagForm = new FormGroup({
    newTag: new FormControl('', [
      Validators.required
    ])
  });

  currUser:User;
  editing:boolean = false;
  cartItems:any;
  cartData=[];
  tags:any;
  constructor(private user:UserService, private shop:ShopService,private router:Router) { }

  ngOnInit(): void {
    this.currUser = UserService.currUser;
    if (this.currUser == null) {
      this.router.navigate(['/login']);
    }else{
      this.cartItems=this.currUser.cart.items;
      this.getCartItems();
    }
    this.tagForm.value.newTag = "";

    this.tags = this.currUser.personalTags;
  }

  getCartItems(){
    this.cartData=[];
    this.cartItems.map(item=>{
      let newItem = this.shop.getItemById(item.itemId);
      this.cartData.push(newItem);
    })
  }

  removeTag(tag:String){
    this.user.removeTag(tag);
    this.ngOnInit();
  }

  addTag(){
    this.user.addTag(this.tagForm.value.newTag);
    this.tagForm.reset();
    this.ngOnInit();
  }

  removeFromCart(id){
    this.shop.removeFromCart(id);
    this.ngOnInit();
  }

}
