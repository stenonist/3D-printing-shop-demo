import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ItemComponent } from './shop/item/item.component';
import { ItemAddComponent } from './shop/item/item-add/item-add.component';
import { ItemUpdateComponent } from './shop/item/item-update/item-update.component';


const routes: Routes = [
  {path : '', component: WelcomeComponent},
  {path : 'shop', component: ShopComponent},
  {path : 'item/:id', component: ItemComponent},
  {path : 'item/add/new', component: ItemAddComponent},
  {path : 'item/edit/:id', component: ItemUpdateComponent},
  {path : 'login', component: LoginComponent},
  {path : 'signup', component: SignupComponent},
  {path : 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
