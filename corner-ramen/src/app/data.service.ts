import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { retry, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    reviewUrl:string = ''
    todosLimit = '?_limit=10' 

    // private SERVER_URL = 'http://localhost:3000';

    constructor(private httpClient:HttpClient) { }

    // public first: string = ""
    // public prev: string = ""
    // public next: string = ""
    // public last: string = ""

    // parseLinkHeader(header){
    //     if (header.length == 0) {
    //         return
    //     }

    //     let parts = header.split(',')
    //     var links = {}
    //     parts.forEach(p => {
    //         let section = p.split(',');
    //         var url = section[0].replace(/<(.*)>/, '$1').trim();
    //         var name = section[1].replace(/rel="(.*0)"/, '$1').trim();
    //         links[name] = url;
    //     });

    //     this.first = links['first']
    //     this.last = links['last']
    //     this.prev = links['prev']
    //     this.next = links['next']
    // }

    // public sendGetRequest(){
    //     //add safe, URL encoded _page and _limit params
    //     return this.httpClient
    //     .get(this.SERVER_URL, {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"})
    //     .pipe(retry(3), 
    //     catchError(this.handleError), tap(res => {
    //         console.log(res.headers.get('Link'));
    //         this.parseLinkHeader(res.headers.get('Link'));
    //     })); 
    // }

    // public sendGetRequestToUrl(url: string){
    //     // this takes URL to which we need to send GET req
    //     return this.httpClient
    //     .get(url, {observe: 'response'})
    //     .pipe(retry(3),
    //     catchError(this.handleError), tap(res=> {
    //         console.log(res.headers.get('Link'));
    //         this.parseLinkHeader(res.headers.get('Link'));
    //     }));
    // }

}
