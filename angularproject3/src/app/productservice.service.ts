import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor() { }
  products:Array<any>=[{name:"Shoe", price:200},
  {name:"Socks", price:40},
  {name:"Belt",price:200},
  {name:"Bag",price:1000},
  {name:"Bottle",price:100}
]
}
