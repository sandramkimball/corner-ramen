import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product'
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  @Input() product:Product

   
  products = [ 
    {
      "id": 1,
      "img": "http://blogs.ubc.ca/ksw4268/files/2013/01/shin_ramyun1.jpg",
      "title": "Spicy",
      "text": "Are you brave enough for the spicy chili bowl?",
      "price": ".99"
    },
    {
      "id": 2,
      "img": "https://2.bp.blogspot.com/-wpi7UxNkjjc/WFM7oUrP_fI/AAAAAAADbA4/uOlbkYc02zUWpwlaZCc4thw17nlzBVgSgCLcB/s640/1P1260762.JPG",
      "title": "Cheesy",
      "text": "Three cheese of vertigo.",
      "price": ".99"
    },
    {
      "id": 3,
      "img": "https://images-na.ssl-images-amazon.com/images/I/518uAL1wWHL.jpg",
      "title": "Vegetable",
      "text": "Organic enough.",
      "price": ".99"
    },
    {
      "id": 4,
      "img": "https://www.bing.com/th?id=OP.5lX%2bNhNPZOlpbQ474C474&w=300&h=300&o=5&pid=21.1",
      "title": "Nissin Chicken 5pack",
      "text": "Does not contain live baby chicks.",
      "price": "24.99"
    },
    {
      "id": 5,
      "img": "https://www.vitacost.com/Images/Products/500/Koyo/Koyo-Dry-Ramen-Lemongrass-Ginger-813551002122.jpg",
      "title": "Lemongrass Ginger",
      "text": "Soothe your soul, body and mind.",
      "price": ".99"
    }
  ]
  constructor(private apiService: ApiService) { }

  ngOnInit() :void {
    // return this.apiService
    // .getProducts()
    // .subscribe( (data)=>{
    //   this.products=data
    // });
  }

}
