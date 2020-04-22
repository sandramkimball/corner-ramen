import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ShopComponent } from './components/shop/shop.component';
import { ReviewComponent } from './components/review/review.component';
import { HashtagComponent } from './components//hashtag/hashtag.component';
import { ViewDetailsComponent } from './components/view-details/view-details.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    ShopComponent,
    ReviewComponent,
    HashtagComponent,
    ViewDetailsComponent,
    PopupComponent
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
