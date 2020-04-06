import { Component, OnInit } from '@angular/core';
import {Card} from '../../models/Card'
import {ProdService} from '../../services/card.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card:Card[]; //create a model of what card should look like
  constructor(private prodService: ProdService) { }

  ngOnInit() {
    this.prodService.getProducts().subscribe(products=>{
      this.card = products
    });
  }

  deleteProd(card:Card){
    // Remove from UI
    this.card = this.card.filter(c=> c.id !== card.id)
    // Remove from server
    this.prodService.deleteProd(card).subscribe();
  }
}
