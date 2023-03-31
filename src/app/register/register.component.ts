import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userdetails!:FormGroup 

  constructor(private router:Router, private myformBuilder: FormBuilder,){}

  ngOnInit(): void {
   this.formControls()
  }

  formControls() {
    this.userdetails = this.myformBuilder.group({
      name:  ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      role:["",Validators.required]
    });

  }
  
  SaveData(){
    this.router.navigateByUrl('/login')
  }
}
