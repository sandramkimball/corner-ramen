import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Product } from '../../models/Product';

// This is a PARENT COMPONENT
// Children: view-details.component(button) & popup.component

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  // Takes in product info
  @Input() product: Product;

  // From view-details
  @Input() popupDisplay: string;

  // Outputs updated display:inherit to popup.component
  @Output() setDisplay = new EventEmitter<string>();
 

  

  constructor() { 
  }

  ngOnInit() :void {
  }


  // takes $event input from view-details to output to popup
  public handleOpen(){
    this.popupDisplay='inherit'
  }
  


}
