import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss'
})
export class RegisterUserComponent {
  register!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.register = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', Validators.required],
      streetAddr: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  registerNewUser() {
    console.log(this.register.value);

    if(this.register.value.username=="maryann" && this.register.value.password=="ihavealotofoptions"){
      this.router.navigate(['login-user']);
      console.log("Successfully went to the login page");
    }
    //console.log("Still stuck in registration page");
  }

}
