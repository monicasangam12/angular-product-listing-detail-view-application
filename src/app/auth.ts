import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = new BehaviorSubject(false);

  constructor(){}

  logoutUser(){
    this.isLoggedIn.next(false);
  }

  loginUser(){
    this.isLoggedIn.next(true);
  }


}
