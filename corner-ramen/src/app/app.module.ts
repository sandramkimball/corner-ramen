import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddProdComponent } from './components/add-prod/add-prod.component';
import { ShopComponent } from './shop/shop.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ItemComponent,
    HeaderComponent,
    AddProdComponent,
    ShopComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
