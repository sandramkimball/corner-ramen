import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/Review'
// import { ApiService } from '../../api.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review:Review

  // reviews=[]
  constructor() { }

  ngOnInit() :void {
    // this.apiService
    // .getReviews()
    // .subscribe((data) =>{  
    //   this.reviews = [data]
    //   console.log(data)
    // })  
  }
    
}