import { TestBed } from '@angular/core/testing';

import { BoutiqueCart } from './boutique-cart';

describe('BoutiqueCart', () => {
  let service: BoutiqueCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueCart);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
