import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Flower } from '../Flowers';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent  {
  
  constructor(public flo: CartService){}

  flowers : Flower[] = [
    {
      id:100,
      name: 'Marigold',
      quantity : 40,
      price:550,
      image: 'https://images.unsplash.com/photo-1652359993628-15ddbf5e5b72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  
  
  
    {
      id:101,
      name: 'Roses',
      quantity : 41,
      price: 450,
      image: 'https://images.unsplash.com/photo-1591726361682-8f2adba9a52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    },
  
  
  
  
    {
      id:102,
      name: 'Lotus',
      quantity : 42,
      price: 350,
      image:'https://images.unsplash.com/photo-1474557157379-8aa74a6ef541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
  
  
    {
      id:103,
      name: 'Lily',
      quantity : 43,
      price: 650,
      image: 'https://images.unsplash.com/photo-1562764280-9556a02589f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=745&q=80',
    },
  
  
    {
      id:104,
      name:' Tulip',
      quantity : 44,
      price: 750,
      image: 'https://images.unsplash.com/photo-1554494583-c4e1649bfe71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },

    {
      id:105,
      name:' Pericallis',
      quantity : 44,
      price: 850,
      image: 'https://images.pexels.com/photos/1136888/pexels-photo-1136888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
      id:106,
      name:' Zinnia',
      quantity : 44,
      price: 750,
      image: 'https://images.pexels.com/photos/863963/pexels-photo-863963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    }
  ]

  addCart(flower : Flower){
    this.flo.arrCart.push(flower);
    console.log(flower);
    alert("Flower Successfully Added To Cart")
  }


}
