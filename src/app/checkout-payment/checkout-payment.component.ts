import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { BoutiqueProductItem } from '../boutique-product-item';
import { Event, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ICreateOrderRequest, IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';
import { GooglePayButtonModule } from '@google-pay/button-angular';

@Component({
  selector: 'app-checkout-payment',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgxPayPalModule, GooglePayButtonModule],
  providers: [],
  templateUrl: './checkout-payment.component.html',
  styleUrl: './checkout-payment.component.scss'
})
export class CheckoutPaymentComponent implements OnInit {
  checkoutPayment!: FormGroup;
  boutiqueItem!: BoutiqueProductItem;
  paymentMethods: string[] = ['Credit Card', 'Debit Card', 'PayPal', 'Google Pay'];
  paymentMethodSelected: string = '';
  debitCardInfo!: FormControl;
  paypalConfig!: IPayPalConfig; 
  event!: Event;
  paymentRequest: google.payments.api.PaymentDataRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [{
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['MASTERCARD', 'VISA']
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          'gateway': 'example', 
          'gatewayMerchantId': 'exampleGatewayMerchantId'
        }
      }
    }],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant'
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '9.99',
      currencyCode: 'USD',
      countryCode: 'US'
    }
  };

  constructor(private fb: FormBuilder, private router: Router){
    this.checkoutPayment = this.fb.group({
      paymentMethod: new FormControl('', Validators.required)
    });
    console.log('Checkout Payment Form initialized:', this.checkoutPayment);

    this.onPaymentMethodChanges();  
  }

  ngOnInit() : void{
    this.initConfig();
  }

  initConfig() {
 
   }

  onPaymentMethodChanges() : void{
    this.checkoutPayment.get('paymentMethod')?.valueChanges.subscribe(value => {
      this.addPaymentDetailsFormGroup(value);
    });
  }
  addPaymentDetailsFormGroup(value: string) : void{
   if(this.checkoutPayment.contains('paymentDetails')){
    this.checkoutPayment.removeControl('paymentDetails');
   }

   let detailsFormGroup: FormGroup | undefined;

   switch(value){ 
    case 'creditCard':  
      detailsFormGroup = this.fb.group({
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
        cardHolderName: new FormControl('', Validators.required),    
        expiryDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$')]),
        cvv: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')])
      });
      break;
    case 'debitCard':
      detailsFormGroup = this.fb.group({
        cardNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
        cardHolderName: new FormControl('', Validators.required),
        expiryDate: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\\/([0-9]{2})$')]),
        cvv: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}$')])
      });
      break;
    case 'paypal':
      this.paypalConfig = {
        currency: 'USD',
        clientId: 'sb',
        createOrderOnClient: (data) => <ICreateOrderRequest>{
          intent: 'CAPTURE',  
          purchase_units: [{
            amount: {
              currency_code: 'USD',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'USD',
                  value: '9.99'
                }
              } 
            },
            items: [{
              name: 'Boutique Item',
              quantity: '1',
              category: 'PHYSICAL_GOODS',
              unit_amount: {
                currency_code: 'USD',
                value: '9.99',
              },
            }]
          }]
        },
        advanced: {
          commit: 'true'
        },
        style: {
          label: 'paypal',
          layout: 'vertical'
        },
        onApprove: (data, actions) => {
          console.log('onApprove - transaction was approved, but not authorized', data, actions);
          actions.order.get().then((details: any) => {
            console.log('onApprove - you can get full order details inside onApprove: ', details);
          }
          );
        },
        onClientAuthorization: (data) => {
          console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        }
      };
      break;
    case 'googlePay':
      this.paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [{
          type: 'CARD',
          parameters: { 
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA', "AMEX", "DISCOVER"]
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              'gateway': 'example',
              'gatewayMerchantId': 'exampleGatewayMerchantId'
            },   
          }
        }],
        merchantInfo: { 
          merchantId: '12345678901234567890',
          merchantName: 'Demo Merchant'
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPriceLabel: 'Total',
          totalPrice: '100.00',
          currencyCode: 'USD',
          countryCode: 'US'
        }
      };
      break;
    default:
      return;
   }
    if(detailsFormGroup) {
      this.checkoutPayment.addControl('paymentDetails', detailsFormGroup);
    }
  }

  onLoadPaymentData(event:any) {
    console.log('Google Pay payment data loaded:', event.detail);
  }

  checkoutNow(boutiqueItem:BoutiqueProductItem){
    this.paymentMethodSelected = this.checkoutPayment.get('paymentMethod')?.value;
    console.log('Selected Payment Method:', this.paymentMethodSelected);

    this.router.navigate(['/checkout-success', boutiqueItem.id]);
  }

  onSubmit(){
    if(this.checkoutPayment.valid){
      console.log('Checkout Payment Form Submitted:', this.checkoutPayment.value);
      this.checkoutNow(this.boutiqueItem);
      console.log('Navigating to Checkout Success Page');
      console.log('Submitted Payment Method:', this.checkoutPayment.get('paymentMethod')?.value);
      console.log('Submitted Payment Details:', this.checkoutPayment.get('paymentDetails')?.value);
     
    } else {
      console.log('Checkout Payment Form is valid:', this.checkoutPayment.valid);
      console.log('Submitted Payment Method:', this.checkoutPayment.get('paymentMethod')?.value);
      console.log('Submitted Payment Details:', this.checkoutPayment.get('paymentDetails')?.value);
      alert('Checked out item from the shopping cart successfully!');
    } 
  }
}
