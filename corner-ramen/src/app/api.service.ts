import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { tap, retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  //create new func to handle errors
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
          return
      }

      let parts = header.split(',')
      var links = {}
      parts.forEach(p => {
          let section = p.split(',');
          var url = section[0].replace(/<(.*)>/, '$1').trim();
          var name = section[1].replace(/rel="(.*0)"/, '$1').trim();
          links[name] = url;
      });

      this.first = links['first']
      this.last = links['last']
      this.prev = links['prev']
      this.next = links['next']
  }
  
  
  public first: string = ""
  public prev: string = ""
  public next: string = ""
  public last: string = ""


  // mock api with localhost server
  // be sure to add to whatever_page.component.ts (will user review)
  public get(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError))
  }

  public sendGetRequest(){
      //add safe, URL encoded _page and _limit params
      return this.httpClient
      .get(this.SERVER_URL, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"})
      .pipe(retry(3), 
      catchError(this.handleError), tap(res => {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
      })); 
  }

  public sendGetRequestToUrl(url: string){
      // this takes URL to which we need to send GET req
      return this.httpClient
      .get(url, {observe: 'response'})
      .pipe(retry(3),
      catchError(this.handleError), tap(res=> {
          console.log(res.headers.get('Link'));
          this.parseLinkHeader(res.headers.get('Link'));
      }));
  }


}

 
