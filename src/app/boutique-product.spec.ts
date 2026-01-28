import { TestBed } from '@angular/core/testing';
import { BoutiqueProductService } from './boutique-product';

describe('BoutiqueProductService', () => {
  let service: BoutiqueProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
