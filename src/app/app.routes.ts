import { Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BoutiqueProductComponent } from './boutique-product/boutique-product.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CardPayment } from './card-payment/card-payment';
import { AngularOauth2Login } from './angular-oauth2-login/angular-oauth2-login';
import { LogoutComponent } from './logout/logout';

export const routes: Routes = [
    {
        path: 'register-user',
        component: RegisterUserComponent
    },
    {
        path: 'oauth2-login',
        component: AngularOauth2Login
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'boutique-product',
        component: BoutiqueProductComponent
    },
    {
        path: 'checkout-payment',
        component: CheckoutPaymentComponent
    },
    {
        path: 'card-payment',
        component: CardPayment
    }
];
