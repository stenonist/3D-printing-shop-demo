import { Component, OnInit } from '@angular/core';
import { ShopService, Item } from '../shop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:any;
  available:boolean;
  inCart:boolean = false;

  commentForm = new FormGroup({
    comment: new FormControl('', [
      Validators.required
    ]),
    grade: new FormControl('', [
      Validators.required
    ]),
  });

  errorExists = false;
  errorMessage = '';

  constructor(private shop:ShopService, private route: ActivatedRoute,private router:Router, private user:UserService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.item = this.shop.getItemById(id);
    if (this.item.stock>0) {
      this.available = true;
    }else{
      this.available = false
    }
    if(UserService.currUser!== null){
      UserService.currUser.cart.items.forEach(item => {
        if(item.itemId==this.item.itemId){
          this.inCart=true;
        }
      });
    }
  }

  changeGrade(e){
    this.commentForm.value.grade = e.target.value;
  }

  addComment(){
    if (UserService.currUser===null) {
      this.router.navigate(['/login'])
    }else{
      console.log(this.commentForm.value.grade);

      let comment = this.commentForm.value.comment;
      let id = this.item.itemId
      let grade = this.commentForm.value.grade;
      let bool =true;
      this.item.reviews.forEach(com=>{
        if (com.userId==id) {
          window.alert("you already left a comment");
          this.commentForm.reset();
          bool = false;
        }
      })
      if (bool) {
        this.shop.rateItem(id,comment,grade)
      }
    }
  }

  addToCart(){
    if (UserService.currUser===null) {
      this.router.navigate(['/login'])
    }else{
      ShopService.dummyItemList.forEach(item=>{
        if (item.itemId == this.item.itemId) {
          let stock:any = item.stock;
          if (stock<1) {
            window.alert("Nema na stanju");
          }else{
            stock--;
            item.stock = stock;
            this.shop.addToCart(this.item);
            this.inCart=true;
          }
        }
      })
    }
  }
  removeFromCart(){
    this.shop.removeFromCart(this.item.itemId);
    this.inCart=false;
  }
}
