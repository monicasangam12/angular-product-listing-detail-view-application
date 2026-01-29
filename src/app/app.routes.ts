import { Routes } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { BoutiqueProductComponent } from './boutique-product/boutique-product.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CardPayment } from './card-payment/card-payment';

export const routes: Routes = [
    {
        path: 'register-user',
        component: RegisterUserComponent
    },
    {
        path: 'login-user',
        component: LoginUserComponent
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
