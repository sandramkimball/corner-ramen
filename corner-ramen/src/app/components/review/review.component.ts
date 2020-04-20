import { Component, OnInit, Input } from '@angular/core';
import { Review } from '../../models/Review'
// import { ReviewService } from '../../services/review.service'
import { ApiService } from '../../api.service'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review; // model of what card should look like

  reviews = [];
  constructor(private apiService: ApiService) { }
  ngOnInit(){
    this.apiService.sendGetRequest().pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>)=>{  
      console.log(res);  
      this.reviews = res.body;  
    })  
  }

  // pagination from data.service.ts 
  // parses, uh, the header? link? data?
  public firstPage() {
    this.reviews = [];
    this.apiService.sendGetRequestToUrl(this.apiService.first).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.reviews = res.body;
    })
  }

  public previousPage() {
    if (this.apiService.prev !== undefined && this.apiService.prev !== '') {
      this.reviews = [];
      this.apiService.sendGetRequestToUrl(this.apiService.prev).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.reviews = res.body;
      })
    }

  }

  public nextPage() {
    if (this.apiService.next !== undefined && this.apiService.next !== '') {
      this.reviews = [];
      this.apiService.sendGetRequestToUrl(this.apiService.next).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.reviews = res.body;
      })
    }
  }

  public lastPage() {
    this.reviews = [];
    this.apiService.sendGetRequestToUrl(this.apiService.last).pipe(takeUntil(this.destroy$)).subscribe((res: HttpResponse<any>) => {
      console.log(res);
      this.reviews = res.body;
    })
  }

}
