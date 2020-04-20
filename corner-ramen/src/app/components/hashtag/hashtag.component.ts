import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/models/Review'
import { HttpResponse } from '@angular/common/http';
import {ApiService} from '../../api.service'

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  review: Review[]
  constructor(private apiService: ApiService) { }


  ngOnInit() {
    return this.apiService
    .sendGetRequest()
    .subscribe( (res: HttpResponse<any> )=>{
      this.review = res.body
    });
  }

}
