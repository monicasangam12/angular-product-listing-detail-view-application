import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPaymentReceiptComponent } from './checkout-payment-receipt-component';

describe('CheckoutPaymentReceiptComponent', () => {
  let component: CheckoutPaymentReceiptComponent;
  let fixture: ComponentFixture<CheckoutPaymentReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPaymentReceiptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPaymentReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
