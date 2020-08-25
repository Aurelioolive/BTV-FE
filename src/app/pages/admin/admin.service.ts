import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
   // private socket: Socket,
    private http: HttpClient) {
  }
  public getTweets(hashtag): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/twitter-list/${hashtag}`)
  }

  addTweet(tweet){
   // this.socket.emit('tweets', message);
  }

  receiveTweets(){
   // return this.socket.fromEvent('tweets');
  }
}
