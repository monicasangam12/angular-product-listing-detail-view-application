import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://trial-2762407.okta.com',
  clientId: '0oa104jbpc7vTO2yE698',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'offline_access']
});

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    importProvidersFrom(OktaAuthModule.forRoot({oktaAuth}))
  ],
};

