import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrl: './logout.scss',
})
export class LogoutComponent {
  private auth = inject(AuthService);

  logout(): void {
    this.auth.logout();
  }
}
