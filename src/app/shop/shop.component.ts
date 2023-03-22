import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Flower } from '../Flowers';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  ngOnInit(): void {
    
  }

  name : string =''
  price : number =1;

  flower : Flower = new Flower(this.name,1,this.price)

  constructor(private route:ActivatedRoute,private cartService: CartService){}

  addToCart(){
    this.cartService.addFlower(this.flower);
  }


}
