import { Component, OnInit } from '@angular/core';
import {Review} from 'src/app/models/Review'
import {ApiService} from '../../api.service'

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  reviews: Review[]
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService
    .sendGetRequest()
    .subscribe(res=>{
      this.reviews = res
    });
  }

}
