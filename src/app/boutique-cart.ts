import { Injectable } from '@angular/core';
import { BoutiqueCart } from './boutique-product-item';

@Injectable({
  providedIn: 'root',
})
export class BoutiqueCartService {
  private cartItems: BoutiqueCart[] = [];

  constructor() {}

  addToCart(item: BoutiqueCart): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      console.log('Item quantity updated in cart:', existingItem);
    } else {
      this.cartItems.push({ ...item });
      console.log('Item added to cart:', item);
    }
  }

  getCartItems(): BoutiqueCart[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }

}
