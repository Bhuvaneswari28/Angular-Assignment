import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name2="";
  email2=""; 
  password2="";
  number2="";

  submit(name:any,email:any,pwd:any,number:any){
    this.name2=name;
    this.email2=email;
    this.password2=pwd;
    this.number2=number;    
  }


  constructor() { }

  ngOnInit(): void {
  }

}
