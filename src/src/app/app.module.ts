import { NgModule } from "@angular/core";
import { SignInPage } from "./sign-in-page/sign-in-page";
import { SignOutPage } from "./sign-out-page/sign-out-page";
import { AppComponent } from "./app.component";
import { OKTA_CONFIG, OktaAuthModule } from "@okta/okta-angular";
import { ProfileComponent } from "./profile/profile";

@NgModule({
    imports: [SignInPage, SignOutPage, AppComponent, OktaAuthModule, ProfileComponent],
    providers: [
       {provide: OKTA_CONFIG, useValue: OKTA_CONFIG}
    ]
})
export class AppModule{

}