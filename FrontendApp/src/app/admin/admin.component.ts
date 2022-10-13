import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  constructor(private router: Router,private http: HttpClient) {}
 

  signupForm: FormGroup;

  

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required]),
      
    });
  }
  baseUrl = 'http://localhost:4200/admin';
  onSubmit() {
      if(this.signupForm.value.username=="kamal" && this.signupForm.value.password=="kamal"){
        alert("Login success")
        this.router.navigate(['/myaadhar'])
      }else{
        
        alert("Invalid Credentials")
      }
    }
  
 
}