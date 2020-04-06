import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Card} from 'src/app/models/Card'
import {ProdService} from '../../services/card.service'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() card: Card;
  @Output() deleteProd: EventEmitter<Card> = new EventEmitter
  
  constructor(private prodService:ProdService) { }

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

  onAdd(card){
    //toggle in UI
    card.added = !card.added
    // toggle on server
    this.prodService.addProd(card)
    console.log(card)
  }

  onDelete(card){
    this.deleteProd.emit(card)
    console.log('delete')
  }
}
