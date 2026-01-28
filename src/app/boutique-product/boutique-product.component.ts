import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BoutiqueProductItem } from '../boutique-product-item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boutique-product',
  imports: [CommonModule],
  templateUrl: './boutique-product.component.html',
  styleUrl: './boutique-product.component.scss'
})
export class BoutiqueProductComponent {

   boutiqueProduct!: BoutiqueProductItem;

   constructor(private router: Router) {}

   boutiqueProducts: BoutiqueProductItem[] = [
      {
        id: 1, name: "Peach dress", description: "the dress gives a stunning and elegant look on a girl", price: 90.00, image: "peachdress.jpg",
        quantity: 0
      },{
        id: 2, name: "Ruby Earrings", description: "ruby earrings make a woman look beautiful", price: 110.00, image: "rubyearrings.jpg",
        quantity: 0
      },
      {
        id: 3, name: "Sapphire Necklace", description: "deep blue necklace which gives your neck wisdom ,loyalty and royalty", price: 35.94, image: "blue-sapphire.jpg",
        quantity: 0
      },
      {
        id: 4, name: "Green Scarf", description: "green scarf that adds an additional accessory to your body", price: 85.20, image: "greenscarf.jpg",
        quantity: 0
      },
      {
        id: 5, name: "Sunglasses", description: "an accessory that a person can wear during the summer", price: 49.78, image: "sunglasses.jpg",
        quantity: 0
      },
      {
        id: 6, name: "Boots", description: "footwear that you wear when it is snowing and cold outside", price: 63.29, image: "boots.jpg",
        quantity: 0
      },
      {
        id: 7, name: "Sephora citrus perfume", description: "a perfume when sprayed gives you a citrusy appearance", price: 55.10, image: "sephoracitrus.jpg",
        quantity: 0
      }
  ];

  cartItemCount(product: BoutiqueProductItem) {
    const item = this.boutiqueProducts.find(p => p.id === product.id);
    return item ? item.quantity : 0;
  }

  addToCart(product: BoutiqueProductItem): void {
    console.log(`Added to cart: ${product.name} - $${product.price}`);
    alert(`Added to cart: ${product.name} - $${product.price}`);
    // increment quantity for the matching product in the list
    const item = this.boutiqueProducts.find(p => p.id === product.id);
    if (item) {
      item.quantity = (item.quantity ?? 0) + 1;
    }
    console.log('Current cart items:', this.boutiqueProducts);
    const totalQuantity = this.boutiqueProducts.reduce((sum, p) => sum + (p.quantity ?? 0), 0);
    console.log('Total items in cart:', totalQuantity);
  }

  checkout(products: BoutiqueProductItem[]): void {
   console.log(`Adding an item to the checkout page: ${products[0].name} - $${products[0].price}`);
   alert("Successfully added item to checkout cart");
   this.router.navigate(['checkout-payment']);
  }
}