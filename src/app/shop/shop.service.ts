import { Injectable } from '@angular/core';
import { UserService, CartItem } from '../auth/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  static dummyItemList: Array<Item> = [
    {
      itemId : 1,
      itemName: "Produkt 1",
      itemPrice: 20,
      category: "kategorija1",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Srbija",
      stock: 5,
      tag: [""],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        },
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        },
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        }
      ],
      arrival:2
    },
    {
      itemId : 2,
      itemName: "Produkt 2",
      itemPrice: 30,
      category: "kategorija1",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Srbija",
      stock: 2,
      tag: [""],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        },
        {
          userId: 2,
          comment: "Ovo je neki komentar",
          grade: 2
        },
        {
          userId: 3,
          comment: "Ovo je neki komentar",
          grade: 1
        }
      ],
      arrival:5
    },
    {
      itemId : 3,
      itemName: "Produkt 3",
      itemPrice: 100,
      category: "kategorija2",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Bosna",
      stock: 10,
      tag: [""],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 5
        },
        {
          userId: 2,
          comment: "Ovo je neki komentar",
          grade: 5
        },
        {
          userId: 3,
          comment: "Ovo je neki komentar",
          grade: 3
        }
      ],
      arrival:1
    },
    {
      itemId : 4,
      itemName: "Produkt 4",
      itemPrice: 5,
      category: "kategorija2",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Crna gora",
      stock: 5,
      tag: [""],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 2
        },
        {
          userId: 2,
          comment: "Ovo je neki komentar",
          grade: 3
        },
        {
          userId: 3,
          comment: "Ovo je neki komentar",
          grade: 2
        }
      ],
      arrival:10
    },
    {
      itemId : 5,
      itemName: "Produkt 5",
      itemPrice: 200,
      category: "kategorija2",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Srbija",
      stock: 25,
      tag: [""],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 5
        },
        {
          userId: 2,
          comment: "Ovo je neki komentar",
          grade: 5
        },
        {
          userId: 3,
          comment: "Ovo je neki komentar",
          grade: 5
        }
      ],
      arrival:1
    },
    {
      itemId : 6,
      itemName: "Produkt 6",
      itemPrice: 50,
      category: "kategorija3",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Srbija",
      stock: 100,
      tag: ["test"],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        },
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 3
        },
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 2
        }
      ],
      arrival:1
    },
    {
      itemId : 7,
      itemName: "Produkt 7",
      itemPrice: 20,
      category: "kategorija3",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Srbija",
      stock: 0,
      tag: ["test"],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        },
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 1
        },
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 2
        }
      ],
      arrival:1
    },
    {
      itemId : 8,
      itemName: "Produkt 8",
      itemPrice: 120,
      category: "kategorija4",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Makedonija",
      stock: 25,
      tag: ["test"],
      reviews: [
        {
          userId: 1,
          comment: "Ovo je neki komentar",
          grade: 4
        }
      ],
      arrival:2
    },
    {
      itemId : 9,
      itemName: "Produkt 9",
      itemPrice: 500,
      category: "kategorija1",
      imageUrl: "assets/images/item.jpg",
      info: "Neke informacije o dobavljacu", //informacije o dobavljacu?
      originCountry: "Srbija",
      stock: 10,
      tag: ["test"],
      reviews: [

      ],
      arrival:1
    }
  ]

  constructor(private user:UserService,private router:Router) { }

  getItems(){
    return ShopService.dummyItemList;
  }
  getItemById(id){
    return ShopService.dummyItemList[id-1];
  }
  updateItem(item:Item){
    let id = item.itemId;
    let updated = item;
    ShopService.dummyItemList.map(item=>{
      if (item.itemId == id) {
        item = updated;
      }
    })
  }
  removeItem(id){
    let newArr = [];
    ShopService.dummyItemList.map(item=>{
      if (item.itemId != id) {
        newArr.push(item);
      }
    })
    ShopService.dummyItemList = newArr;
  }
  addToCart(newitem:CartItem){
    let newArr = [];
    this.user.getCurrUser().cart.items.map(item=>{
      if (newitem.itemId == item.itemId){
        let inc:any = item.quantity;
        inc++;
        item.quantity = inc;
      }
      newArr.push(item);
    })
    let idArr = Object.keys(this.user.getCurrUser().cart.items);
    if (!idArr.includes(newitem.itemId.toString())) {
      newArr.push(newitem);
    }
    this.user.getCurrUser().cart.items=newArr;
  }
  removeFromCart(itemId){
    let newArr = [];
    UserService.dummyUserList.forEach(user=>{
      if (user.userId == UserService.currUser.userId) {
        user.cart.items.forEach(item=>{
          if (item.itemId!=itemId) {
            newArr.push(item);
          }
        })

        user.cart.items = newArr;
        UserService.currUser.cart.items = newArr;
        console.log(UserService.currUser.cart.items);
      }
    })
  }
  rateItem(itemId:Number,comment:String,grade:Number){
    let userId = this.user.getCurrUser().userId;
    let bool=true;
    ShopService.dummyItemList.map(item=>{
      if (item.itemId == itemId) {

        item.reviews.map(review=>{

          if (review.userId == userId) {
            window.alert("you already left a comment");
            bool=false;
          }
        })
        if (bool) {
          let curr = {
            "userId": 1,
            "comment": comment,
            "grade": grade
          }
          item.reviews.push(curr)
          console.log(item);
        }

      }
    })
  }

   editReview(itemId: Number, newComment:String, newGrade){
    ShopService.dummyItemList.map(item=>{
      if (item.itemId == itemId) {
        item.reviews.map(review=>{
          if (review.userId == this.user.getCurrUser().userId){
            review.comment = newComment;
            review.grade = newGrade;
          }
        })
      }
    })
  }
}

export interface Review{
  userId: Number;
  comment: String;
  grade: Number;
}

export interface Item{
  itemId: Number;
  itemName: String;
  itemPrice: Number;
  category: String;
  imageUrl: String;
  info: String; //informacije o dobavljacu?
  originCountry: String;
  stock: Number;
  tag: String[];
  reviews: Review[];
  arrival:Number;
}
