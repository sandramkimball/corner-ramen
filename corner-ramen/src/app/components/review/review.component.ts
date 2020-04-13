import { Component, OnInit, Input } from '@angular/core';
import {Review} from '../../models/Review'
import {ReviewService} from '../../services/review.service'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review; //create a model of what card should look like

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    
  }

}
