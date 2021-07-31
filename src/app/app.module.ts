import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { WelcomeComponent } from './welcome/welcome.component';
import { ShopComponent } from './shop/shop.component';
import { ItemComponent } from './shop/item/item.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserService } from './auth/user.service';
import { ShopService } from './shop/shop.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ShopComponent,
    ItemComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent
  ],
  imports: [
	  ReactiveFormsModule,
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [UserService,ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
