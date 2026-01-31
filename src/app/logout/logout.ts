import { Component, inject } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.scss',
})
export class LogoutComponent {
  
  constructor(private authService: AuthService, private router: Router){}

  logout(): void {
    this.authService.logoutUser();
    this.router.navigate(['register-user']);
    alert("Logged out of the application successfully!");
  }
}
