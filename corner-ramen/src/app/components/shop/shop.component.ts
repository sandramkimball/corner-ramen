import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product'
// import { HttpResponse } from '@angular/common/http';
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() product:Product

  products=[]
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    return this.apiService
    .getProducts()
    .subscribe( (data)=>{
      this.products=data
      console.log('Products', this.products)
    });
  }

}
