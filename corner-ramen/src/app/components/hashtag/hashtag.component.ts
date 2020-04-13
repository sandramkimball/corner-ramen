import { Component, OnInit, Input } from '@angular/core';
import {Review} from 'src/app/models/Review'

@Component({
  selector: 'app-hashtag',
  templateUrl: './hashtag.component.html',
  styleUrls: ['./hashtag.component.css']
})
export class HashtagComponent implements OnInit {
  @Input() review: Review

  constructor() { }

  ngOnInit(): void {
  }

}
