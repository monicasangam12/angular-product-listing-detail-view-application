import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';
import { AngularStripeService } from '@fireflysemantics/angular-stripe-service';

@Component({
  selector: 'app-card-payment',
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './card-payment.html',
  styleUrl: './card-payment.scss',
})
export class CardPayment implements AfterViewInit, OnDestroy{

  error: string | null = null;
  @ViewChild('cardInfo', { static: true }) cardInfo!: ElementRef;

  stripe: any;
  loading = false;
  confirmation: any;

  card: any;
  cardHandler = this.onChange.bind(this);

  cardPayment = new FormGroup({
    cardPaymentMethod: new FormControl('', Validators.required)
  });

  constructor(private cd: ChangeDetectorRef, private stripeService: AngularStripeService) {}

  ngAfterViewInit(): void {
      this.stripeService.setPublishableKey('pk_test_2syov9fTMRwOxYG97AAXbOgt008X6NL46o').then((stripe) => {
      this.stripe = stripe;
      const elements = this.stripe.elements();
      this.card = elements.create('card');
      this.card.mount(this.cardInfo.nativeElement);
      this.card.addEventListener('change', this.cardHandler);
    });
  }

  ngOnDestroy(): void {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({error}: {error: any}){
    if(error){
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const {token, error} = await this.stripe.createToken(this.card);
    if(error){
      this.error = error.message;
      console.log('Error:', error);
    } else {
      console.log('Success! Token:', token);
    }
  }
}
