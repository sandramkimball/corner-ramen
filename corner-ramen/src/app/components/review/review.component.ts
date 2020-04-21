import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/Review'
import { ApiService } from '../../api.service'
import { HttpResponse } from '@angular/common/http';
import { retry } from 'rxjs/operators'

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review; //review card html template

  reviews = [];
  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService
    .getReviews()
    .pipe(retry(3))
    .subscribe((res: HttpResponse<any>)=>{  
      console.log(res);  
      this.reviews = res.body;  
    })  
  }

  // pagination from data.service.ts that parses link headers:

  // public firstPage() {
  //   this.reviews = [];
  //   this.apiService
  //   .sendGetRequestToUrl(this.apiService.first)
  //   .pipe(retry(3))
  //   .subscribe((res: HttpResponse<any>) => {
  //     console.log(res);
  //     this.reviews = res.body;
  //   })
  // }

  // public previousPage() {
  //   if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
  //     this.reviews = [];
  //     this.apiService
  //     .sendGetRequestToUrl(this.apiService.prev)
  //     .pipe(retry(3))
  //     .subscribe((res: HttpResponse<any>) => {
  //       console.log(res);
  //       this.reviews = res.body;
  //     })
  //   }

  // }

  // public nextPage() {
  //   if (this.apiService.next !== undefined && this.apiService.next !== '') {
  //     this.reviews = [];
  //     this.apiService
  //     .sendGetRequestToUrl(this.apiService.next)
  //     .pipe(retry(3))
  //     .subscribe((res: HttpResponse<any>) => {
  //       console.log(res);
  //       this.reviews = res.body;
  //     })
  //   }
  // }

  // public lastPage() {
  //   this.reviews = [];
  //   this.apiService
  //   .sendGetRequestToUrl(this.apiService.last)
  //   .pipe(retry(3))
  //   .subscribe((res: HttpResponse<any>) => {
  //     console.log(res);
  //     this.reviews = res.body;
  //   })
  // }

}
