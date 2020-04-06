import { Component, OnInit } from '@angular/core';
import {Card} from '../../models/Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  card:Card[]; //create a model of what card should look like
  constructor() { }

  ngOnInit() {
    this.card=[
      {
        id: 1,
        title: "Spicy",
        text: 'Are you brave enough for the spicy chili bowl?',
        added: false
      },
      {
        id: 2,
        title: "Cheesy",
        text: 'Three cheese of vertigo.',
        added: true
      },
      {
        id: 3,
        title: "Vegetable",
        text: 'Organic enough.',
        added: false
      }
    ]
  }

}
