import { Component, OnInit, Input } from '@angular/core';
import {Card} from 'src/app/models/Card'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() card: Card;
  constructor() { }

  ngOnInit(): void {
  }

  //set dynamic classes
  setClasses(){
    let classes = {
      card: true,
      'is-added': this.card.added
    }
    return classes;
  }
}
