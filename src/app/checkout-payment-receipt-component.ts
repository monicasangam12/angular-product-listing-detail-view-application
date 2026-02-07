import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { BoutiqueProductItem } from '../boutique-product-item';

@Component({
  selector: 'app-checkout-payment-receipt-component',
  imports: [CommonModule],
  templateUrl: './checkout-payment-receipt-component.html',
  styleUrl: './checkout-payment-receipt-component.scss',
})
export class CheckoutPaymentReceiptComponent {
      boutiqueItems: BoutiqueProductItem[] = [
    {id: 1, name: 'Peach Dress', description: 'the dress gives a stunning and elegant look on a girl', image: 'peachdress.jpg', quantity: 10, price: 90.00},
    {id: 2, name: 'Ruby Earrings', description: 'ruby earrings make a woman look beautiful', image: 'rubyearrings.jpg', quantity: 15, price: 110.00},
    {id: 3, name: 'Sephora Citrus Perfume', description: 'a perfume when sprayed gives you a citrusy appearance', image: 'sephoracitrus.jpg', quantity: 23, price: 55.10},
  ];

  constructor(private http: HttpClient, private router: Router){}

  getTotalAmount():number{
    return this.boutiqueItems.reduce((sum, item) => sum + this.boutiqueItems[0].price * this.boutiqueItems[0].quantity, 0);
  }

  async checkout(){
    this.http.post<{url: string}>(`${environment.backendUrl}/create-checkout-session`, {
      items: this.boutiqueItems,
      totalAmount: this.getTotalAmount()
    }).subscribe(response => {
      if(response.url){
        window.location.href = response.url;
      }
    });
    this.router.navigate(['success']);
  }

}
