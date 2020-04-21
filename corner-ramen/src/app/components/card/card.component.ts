import { Component, OnInit } from '@angular/core';
import {Card} from '../../models/Card'
import { ApiService } from '../../api.service'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card:Card[];  //create a model of what card shouldlook like

  products = []
  constructor(private apiService: ApiService) { }

  ngOnInit() :void {
    // this.apiService
    // .getProducts()
    // .subscribe((res: HttpResponse<any>)=>{  
    //   console.log(res);  
    //   this.card = res.body;  
    //   this.products = res.body.products;
    // })  
  }

  
}
