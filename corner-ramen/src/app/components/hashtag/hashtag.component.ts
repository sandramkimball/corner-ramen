import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/Review'
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  @Input() review:Review

  reviews=[
    {
      "id": 1,
      "username": "LindsayDear12",
      "comment": "Date night with my man 😍😍❤️",
      "image_url": "https://images.unsplash.com/photo-1529175283207-194a414b9ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
    },
    
    {
      "id": 2,
      "username": "RayRayShine",
      "comment": "I've never seen so many noodles in mah life XD",
      "image_url": "https://st3.depositphotos.com/1035886/18205/i/1600/depositphotos_182054852-stock-photo-ramen-noodle-store.jpg"
    },
    {
      "id": 3,
      "username": "TheLuGarcia",
      "comment": "🔥🔥Spicy Ramen Challenge FAIL haha🔥🔥 SOS Max aboutta DIE🚒",
      "image_url": "https://i.ytimg.com/vi/CaSdea4UykE/maxresdefault.jpg"
    },
    {
      "id": 4,
      "username": "CiciPanda",
      "comment": "Nothing better than hot ramen when your sick. Picke up the real stuff at the market.",
      "image_url": "https://th.bing.com/th/id/OIP.lP63wgulm0dkNXj2R7LcXAHaLG?pid=Api&rs=1"
    }
  ]

  constructor(private apiService: ApiService) { }

  
  ngOnInit() :void {
    // this.apiService
    // .getReviews()
    // .subscribe((data) =>{  
    //   this.reviews = data
    // })  
  }

}
