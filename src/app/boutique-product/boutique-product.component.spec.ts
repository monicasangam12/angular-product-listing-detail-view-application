import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueProductComponent } from './boutique-product.component';

describe('BoutiqueProductComponent', () => {
  let component: BoutiqueProductComponent;
  let fixture: ComponentFixture<BoutiqueProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutiqueProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutiqueProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
