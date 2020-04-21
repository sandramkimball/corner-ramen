import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  
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

    this.first  = links["first"];
    this.last   = links["last"];
    this.prev   = links["prev"];
    this.next   = links["next"]; 
  }
  
  
  public first: string = ""
  public prev: string = ""
  public next: string = ""
  public last: string = ""


  // mock apis with localhost server (to be used in ie review.component.ts)

  public get(){
    return this.httpClient
    .get(this.SERVER_URL)
    .pipe(catchError(this.handleError))
  }

  public getProducts(){
    return this.httpClient
    .get('http://localhost:3000/products')
    .pipe(catchError(this.handleError))
  }

  public getReviews(){
    return this.httpClient
    .get('http://localhost:3000/reviews')
    .pipe(catchError(this.handleError))
  }


  public sendGetRequest(){
      //new Params: add safe, URL encoded _page and _limit params
      return this.httpClient
      .get(this.SERVER_URL, { observe: "response"})
      .pipe(retry(3), 
      catchError(this.handleError), tap(res => {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
      })); 
  }

  // public sendGetRequestToUrl(url: string){
  //     // modified to take in URL as param instead of calling saved
  //     return this.httpClient
  //     .get(url, {observe: 'response'})
  //     .pipe(retry(3),
  //     catchError(this.handleError), tap(res=> {
  //         console.log(res.headers.get('Link'));
  //         this.parseLinkHeader(res.headers.get('Link'));
  //     }));
  // }


}

 
