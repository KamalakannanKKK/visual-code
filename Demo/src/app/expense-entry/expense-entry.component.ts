import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-entry',
  templateUrl: './expense-entry.component.html',
  styleUrls: ['./expense-entry.component.css']
})
export class ExpenseEntryComponent implements OnInit {
  title:String;

  constructor() { }
  input1:String="Welcome"; 
  msg=""
  auth=""
  myfun(){
    this.msg="Welcome"+this.input1;
  }
  ngOnInit() {
    this.title="Expense Entry";
  }
  my(){
    if(this.input1=="kamal"){
      this.auth=this.input1+"is Authenticated";
    }
  }

}
