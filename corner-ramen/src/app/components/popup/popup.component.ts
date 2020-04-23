import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent implements OnInit {
  // Takes in product info
  @Input() product: Product;
  // Takes in updated popup display from parent
  @Input() popupDisplay: string;

  constructor() {
    if(this.popupDisplay == undefined){
      this.popupDisplay = 'none'
    }
    console.log('popup input:', this.popupDisplay) 
  }

  ngOnInit() :void {
  }

  // Sets product popup display: none
  handleDisplay(){
    this.popupDisplay=('none')
    console.log('popup output', this.popupDisplay)
  }

}
