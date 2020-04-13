import { Component, OnInit } from '@angular/core';
import {Review} from 'src/app/models/Review'
import {ReviewService} from '../../services/review.service'

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  review: Review[]
  constructor(private reviewService: ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviews().subscribe(reviews=>{
      this.review = reviews
    });
  }

}
