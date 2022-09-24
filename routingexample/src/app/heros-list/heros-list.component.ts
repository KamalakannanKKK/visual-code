import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {
  email:string="abc@gmail.com";
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
  
    this.route.navigate(['/crisis-list']);
  
    
  }
}
