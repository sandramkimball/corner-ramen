import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import {Observable} from 'rxjs'
import {Card} from '../models/Card'


@Injectable({
  providedIn: 'root'
})
export class ProdService {

  productUrl:string = 'products'

  constructor(private http:HttpClient) { }

  getProducts():Observable<Card[]>{
    return this.http.get<Card[]>(this.productUrl);
    
  }

}