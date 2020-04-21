import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.css']
})
export class AddProdComponent implements OnInit {
  @Output() addProd: EventEmitter<any> = new EventEmitter();

  img:string;
  title:string;
  text:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const card = {
      img: this.img,
      title: this.title,
      text: this.text,
    }
    this.addProd.emit(card)
  }

}
