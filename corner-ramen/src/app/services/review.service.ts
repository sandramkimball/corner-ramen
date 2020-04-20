import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {Review} from '../models/Review';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewUrl:string = ''
  todosLimit = '?_limit=10' 

  constructor(private http:HttpClient) { }

  getReviews():Observable<Review[]>{
    return this.http.get<Review[]>(this.reviewUrl);
    
  }

}
