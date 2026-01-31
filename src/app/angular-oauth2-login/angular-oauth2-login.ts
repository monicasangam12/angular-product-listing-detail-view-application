import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-angular-oauth2-login',
  imports: [],
  templateUrl: './angular-oauth2-login.html',
  styleUrl: './angular-oauth2-login.scss',
})
export class AngularOauth2Login {
   private auth = inject(AuthService);
   authenticationType!: string;

   constructor(){
    if(this.authenticationType == 'google'){
      this.loginWithGoogle();
    }
    else if(this.authenticationType == 'facebook'){
      this.loginWithFacebook();
      console.log('Redirecting to Facebook OAuth2 login page');
    }
    else if(this.authenticationType == 'microsoft'){
      this.loginWithMicrosoft();
      console.log('Redirecting to Microsoft OAuth2 login page');
    }
   }

   loginWithGoogle(){
    window.location.href = 'https://accounts.google.com/';
    console.log('Redirecting to Google OAuth2 login page');
   }

   loginWithFacebook(){
    window.location.href = 'https://www.facebook.com/login';
    console.log('Redirecting to Facebook OAuth2 login page');
   }

   loginWithMicrosoft(){
    window.location.href = 'https://login.microsoftonline.com/';
    console.log('Redirecting to Microsoft OAuth2 login page');
   }
}
