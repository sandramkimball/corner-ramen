import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/Product'

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  // Take in product info
  @Input() product:Product

  // Outputs display:inherit on button click
  @Output() setDisplay = new EventEmitter<string>()


  constructor() {
  }

  ngOnInit() {
  }

  // Sets product popup box display: inherit
  handleDisplay(){
    this.setDisplay.emit('inherit')
  }

}
