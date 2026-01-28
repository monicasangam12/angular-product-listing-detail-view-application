import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.scss'
})
export class LoginUserComponent {
  login!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.login = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser(){
    console.log(this.login.value);

    if(this.login.value.username=="maryann" && this.login.value.password=="ihavealotofoptions"){
      this.router.navigate(['boutique-product']);
      console.log('Successfully went to the boutique product catalog page');
    }
  }
}
