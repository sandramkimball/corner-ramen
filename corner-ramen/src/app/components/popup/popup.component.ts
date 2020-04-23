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

  displayStyle = 'none'
  
  constructor() {
  }

  ngOnInit()  {  
    if (this.popupDisplay == 'inherit'){
      this.displayStyle = 'inherit'
    }
  }


  // Closes popup window on click
  handleClose(){
    this.displayStyle=('none')
  }

}
