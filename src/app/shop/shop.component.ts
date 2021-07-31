import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService, CartItem, User } from '../auth/user.service';
import { ShopService, Item } from './shop.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  items: any;
  role:any;
  length: number;
  itemsSource: MatTableDataSource<Item>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort : MatSort;
  observable: Observable<any>;

  currUser:User;
  tags:String[];


  constructor(private user:UserService,private shop:ShopService) { }

  ngOnInit(): void {
    this.items = ShopService.dummyItemList;
    this.initSource();
    this.currUser = this.user.getCurrUser();
    if (this.currUser!=null) {
      if (this.currUser.personalTags) {
        this.tags=this.currUser.personalTags;
      }
    }
  }

  initSource(){
    this.itemsSource = new MatTableDataSource<Item>();
    this.itemsSource.data = this.items;
    this.itemsSource.paginator = this.paginator;
    this.itemsSource.sort = this.sort;
    this.observable = this.itemsSource.connect();
  }

  filt:boolean;
  doFilter(filterValue : string) {
    this.itemsSource.filter = filterValue.trim().toLowerCase();
    if (filterValue=="") {
      this.filt=false;
    }else{
      this.filt=true
    }
  }

  reserveItem(itemId: number){
    let foundItem = ShopService.dummyItemList.find(item=>{
      return item.itemId==itemId;
    })
    let numberAvailable:any = foundItem.stock;
    if (numberAvailable==0) {
      window.alert("Nema na stanju");
    }else{
      let toAdd:CartItem;
      ShopService.dummyItemList.map(item=>{
        if (item.itemId=itemId) {
          item.stock = numberAvailable--;
          toAdd={
            itemId: item.itemId,
            quantity: 1
          }
        }
      })
      this.shop.addToCart(toAdd);
    }
  }
  removeReservation(itemId:Number){
    this.shop.removeFromCart(itemId);
  }

}
