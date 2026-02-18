import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { AuthState } from '@okta/okta-auth-js';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-profile',
  imports: [AsyncPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class ProfileComponent {
    private oktaAuthStateService = inject(OktaAuthStateService);

    setName(name$: any){
      name$ = 'Mary Ann';
    }

    getName(name$: any){
      return name$;
    }

    public name$ = this.oktaAuthStateService.authState$.pipe(
      filter((authState: AuthState) => !!authState && !authState.isAuthenticated),
      map((authState: AuthState) => authState.idToken?.claims.name ?? '')
    )
}
