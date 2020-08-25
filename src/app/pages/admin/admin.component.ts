import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from './admin.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  tweetsList:any;
  hashtag=''
  constructor(private service: AdminService) { }
  ngOnInit(): void {
  }

  sendTwitter(tweet):void{
    console.log(tweet)
  }

  getTweets(hashtag):any{
    this.service
      .getTweets(hashtag)
      .toPromise()
      .then(
        (res) => {
          this.tweetsList = res.tweets;
          console.log(this.tweetsList)
        },
        (err) => {
          console.log(err)
        }
      )
      .finally();
  }

  onKey(event: any) {
    this.hashtag = event.target.value;
  }
}
