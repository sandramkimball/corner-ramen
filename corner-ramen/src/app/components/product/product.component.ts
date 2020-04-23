import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../models/Product';

// This is a Parent Component
// Children: view-details.component(button) & popup.component

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  // Takes in product info
  @Input() product: Product;

  // Takes in updated popup display from view-details
  // @Input() setDisplay: string;

  // Outputs updated display:inherit to popup 
  @Output() popupDisplay = new EventEmitter<string>();
 
  constructor() { 
  }

  ngOnInit() :void {
  }

  // takes $event input from view-details to output to popup
  handleDisplay($event: string){
    if($event == undefined){
      this.popupDisplay.emit('none')
      console.log('parent output: none')
    } else {
      this.popupDisplay.emit($event)
      console.log('parent output:', $event)
    }
  }
  


}
