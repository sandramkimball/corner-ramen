import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ItemComponent } from './components/item/item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ReviewComponent } from './components/review/review.component';
import { HashtagComponent } from './components//hashtag/hashtag.component';
import { AddProdComponent } from './components//add-prod/add-prod.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ItemComponent,
    HeaderComponent,
    ShopComponent,
    ReviewComponent,
    HashtagComponent,
    AddProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
