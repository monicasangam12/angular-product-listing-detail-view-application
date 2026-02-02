import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-card-payment',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './card-payment.html',  styleUrl: './card-payment.scss',})

export class CardPayment implements OnInit{

  constructor() {}
  handler:any = null;

  ngOnInit(): void {
    this.loadStripe();
  }

  pay(amount: any){
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function(token:any){
        console.log(token);
        alert('Token created!!');
      }
    });
    handler.open({
      name: '',
      description: '',
      amount: amount * 100
    });
  }

  loadStripe(){
    if(!window.document.getElementById('stripe-script')){
      var s = window.document.createElement("script");
      s.id = "stripe.script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
          locale: 'auto',
          token: function(token: any){
            console.log(token);
            alert('Payment success!!');
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }

}
