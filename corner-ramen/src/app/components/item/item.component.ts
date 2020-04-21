import { Component, OnInit, Input, } from '@angular/core';
import {Card} from 'src/app/models/Card';
import { ApiService } from '../../api.service';
import { HttpResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() card: Card;
  
  products = []
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
    .getReviews()
    .pipe(retry(3))
    .subscribe((res: HttpResponse<any>)=>{  
      console.log(res);  
      this.products = res.body;  
    })  
  }

  
}
