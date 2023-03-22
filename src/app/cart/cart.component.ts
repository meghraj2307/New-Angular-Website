import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  constructor(public cartSer:CartService){}

  products : any = this.cartSer.getFlowers()

  removeItem(index:number){
    this.cartSer.arrCart.splice(index,1);
    console.log(this.cartSer.arrCart);
  }

  sum:number=0

  totalSum(){
    for(let i=0;i<this.products.length;i++){
      this.sum += this.products[i].price;
    }
  }
}
