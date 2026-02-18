import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { AuthState } from '@okta/okta-auth-js';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-sign-in-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-in-page.html',
  styleUrl: './sign-in-page.scss',
})
export class SignInPage {
  private oktaStateService = inject(OktaAuthStateService);
  private oktaAuth = inject(OKTA_AUTH);

  title = 'okta-angular-quickstart';
  public isAuthenticated$ = this.oktaStateService.authState$.pipe(
    filter((s: AuthState) => !!s),
    map((s:AuthState) => s.isAuthenticated ?? false)
  );

  public async signIn(): Promise<void>{
    await this.oktaAuth.signInWithRedirect();
  }

  public async signOut(): Promise<void>{
    await this.oktaAuth.signOut();
  }

}
