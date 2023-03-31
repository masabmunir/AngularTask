import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login!:FormGroup

  constructor(private router:Router, private myformBuilder: FormBuilder,){}

  ngOnInit(): void {
   this.formControls()
  }

  formControls() {
    this.login = this.myformBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });

  }
  
  SaveData(){
    this.router.navigateByUrl('/dashboard')
  }
}
