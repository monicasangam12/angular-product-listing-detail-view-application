import { Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { BoutiqueProductComponent } from './boutique-product/boutique-product.component';
import { CheckoutPaymentReceiptComponent } from './checkout-payment-receipt-component/checkout-payment-receipt-component';
import { SuccessComponent } from './success-component/success-component';
import { CardPayment } from './card-payment/card-payment';
import { SignInPage } from './sign-in-page/sign-in-page';
import { SignOutPage } from './sign-out-page/sign-out-page';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [
    {
        path: 'register-user',
        component: RegisterUserComponent
    },
    {
        path: 'sign-in-page',
        component: SignInPage
    },
    {
        path: 'sign-out-page',
        component: SignOutPage
    },
    {
        path: 'login/callback',
        component: OktaCallbackComponent
    },
    {
        path: 'profile', 
        component: ProfileComponent
    },
    {
        path: 'boutique-product',
        component: BoutiqueProductComponent
    },
    {
        path: 'checkout-payment-receipt',
        component: CheckoutPaymentReceiptComponent
    },
    {
        path: 'card-payment',
        component: CardPayment
    },
    {
        path: 'success',
        component: SuccessComponent
    }
];
