import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Review } from './models/Review';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:3000';  
  public first: string = ""
  public prev: string = ""
  public next: string = ""
  public last: string = ""

  constructor(private httpClient: HttpClient) { }

  // observe determines how much data to return, responseType specifies what format to return as
  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }
  
  handleError(error: HttpErrorResponse){
    let errMessage = 'Unknown error';
    if(error.error instanceof ErrorEvent){
      errMessage = `Error: ${error.error.message}`;
    } else {
      //server-side errors
      errMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errMessage);
    return throwError(errMessage);
  }

 
  parseLinkHeader(header){
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;
    });
    return links;
  }
  


  // apis to internal 9l(ocalhost) server
  // service methods return an Observable of configuration data and the 
  // component must subscribe to returned value, which just copies data fields into 
  // components config obj, wihch is data-bound in components template for disp,ay
  public get(){
    return this.httpClient
    .get(this.SERVER_URL, { observe: 'response' })
    .pipe(catchError(this.handleError))
  }

  public getProducts():Observable<Product[]>{
    return this.httpClient
    .get<Product[]>('http://localhost:3000/products')
    .pipe(catchError(this.handleError))
  }

  public getReviews():Observable<Review[]>{
    return this.httpClient
    .get<Review[]>('http://localhost:3000/reviews')
    .pipe(catchError(this.handleError))
  }

  public sendGetRequest(){
      //new Params: add safe, URL encoded _page and _limit params
      return this.httpClient
      .get(this.SERVER_URL, { observe: "response"})
      .pipe(retry(3), 
      catchError(this.handleError), tap(res => {
          this.parseLinkHeader(res.headers.get('Link'));
      })); 
  }

  public sendGetRequestToUrl(url: string){
      // modified to take in URL as param instead of calling saved
      return this.httpClient
      .get(url, {observe: 'response'})
      .pipe(retry(3),
      catchError(this.handleError), tap(res=> {
          this.parseLinkHeader(res.headers.get('Link'));
      }));
  }

  public getFirstPage(){
    return this.httpClient
    .get(`${this.SERVER_URL}/reviews`, { observe: 'response' })
    .pipe(tap(res => {
      const links  = this.parseLinkHeader(res.headers.get('links'));
      this.first  = links["first"];
      this.last   = links["last"];
      this.prev   = links["prev"];
      this.next   = links["next"];
    }),    
    catchError(this.handleError), tap(res=> {
        this.parseLinkHeader(res.headers.get('Link'));
    }));
  }

  public getNextPage(url: string){
    return this.httpClient.get(url ,{ observe: 'response' })
    .pipe(tap(res => {
      const Link  = this.parseLinkHeader(res.headers.get('Link'));
      this.first  = Link["first"];
      this.last   = Link["last"];
      this.prev   = Link["prev"];
      this.next   = Link["next"];       
    }));      
  }

}

 
