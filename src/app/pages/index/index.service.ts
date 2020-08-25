import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(
    //private socket: Socket
    ) {
  }
  receiveTweets(){
   // return this.socket.fromEvent('tweets');
  }
}
