import { Component ,Input} from '@angular/core';
import { ExampleserviceService } from './exampleservice.service';
import { ProductserviceService } from './productservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ExampleserviceService,ProductserviceService]
})
export class AppComponent {
 productList: Array<any>=[];
  title = 'angularproject3';
  values:string="";
  //constructor(private _exampleservice:ExampleserviceService){}
   constructor(private b:ProductserviceService){}

  ngOnInit():void{
    //this.values=this._exampleservice.getapp();
    this.productList=this.b.products;
  }


  //pipe
  celcius: number=0;
  Fahrenheit: number=0; 
  toDate: Date = new Date();
numDate=1590319189931;
strDate="Sun May 24 2020 19:16:23"; 
obj={"price":45,
"item" : "Tea"

}
}
