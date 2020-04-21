import { Component, OnInit } from '@angular/core';
import { Review } from '../../models/Review'
import { ApiService } from '../../api.service'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews=[]
  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService
    .getReviews()
    // clone data obj using its template model shape <Review>
    .subscribe((data: HttpResponse<Review>) =>{  
      this.reviews = [data]
      console.log(data)
      // this.reviews = results.map(r=> new Review(r.id, r.username, r.comment, r.image_url))
    })  
  }
    
}