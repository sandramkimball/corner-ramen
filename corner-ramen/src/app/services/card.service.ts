import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable} from 'rxjs'
import {Card} from '../models/Card'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'applications/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  productUrl:string = 'https://www.themealdb.com/api/json/v1/1/search.php?s=noodles'
  todosLimit = '?_limit=10' 

  constructor(private http:HttpClient) { }

  getProducts():Observable<Card[]>{
    return this.http.get<Card[]>(this.productUrl);
    
  }

  // Add Prod
  addProd(card: Card):Observable<any>{
    const url = `${this.productUrl}/${card.id}`;
    return this.http.put(url, card, httpOptions)
  }
  
  // Delete Prod
  deleteProd(card:Card):Observable<Card>{
    const url = `${this.productUrl}/${card.id}`;
    return this.http.delete<Card>(url, httpOptions)
  }

}

// return  [ 
    //   {
    //     id: 1,
    //     img: 'http://blogs.ubc.ca/ksw4268/files/2013/01/shin_ramyun1.jpg',
    //     title: "Spicy",
    //     text: 'Are you brave enough for the spicy chili bowl?',
    //     added: false
    //   },
    //   {
    //     id: 2,
    //     img: 'https://2.bp.blogspot.com/-wpi7UxNkjjc/WFM7oUrP_fI/AAAAAAADbA4/uOlbkYc02zUWpwlaZCc4thw17nlzBVgSgCLcB/s640/1P1260762.JPG',
    //     title: "Cheesy",
    //     text: 'Three cheese of vertigo.',
    //     added: true
    //   },
    //   {
    //     id: 3,
    //     img: 'https://images-na.ssl-images-amazon.com/images/I/518uAL1wWHL.jpg',
    //     title: "Vegetable",
    //     text: 'Organic enough.',
    //     added: false
    //   }
    // ]