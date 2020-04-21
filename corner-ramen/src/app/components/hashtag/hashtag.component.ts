import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/Review'
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  @Input() review:Review

  reviews=[]
  constructor(private apiService: ApiService) { }

  
  ngOnInit() {
    this.apiService
    .getReviews()
    // clone data obj using its template model shape <Review>
    .subscribe((data) =>{  
      this.reviews = [data]
      console.log('reviews, hashtag.comp', this.reviews)
      // this.reviews = results.map(r=> new Review(r.id, r.username, r.comment, r.image_url))
    })  
  }

}
