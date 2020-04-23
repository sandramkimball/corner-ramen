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
  @Output() popupDisplay = new EventEmitter<string>()


  constructor() {
  }

  ngOnInit() {
  }

  // Opens product popup on click
  public handleDisplay(){
    this.popupDisplay.emit('inherit')
  }

}
