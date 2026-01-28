import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BoutiqueProductService {
  boutiqueItems = [
    {id:1, name:"Peach dress", description: "the dress gives a stunning and elegant look on a girl", price: 90.00, image: "peachdress.jpg"},
    {id:2, name:"Ruby Earrings", description: "ruby earrings make a woman look beautiful", price: 110.00, image: "rubyearrings.jpg"},                         
    {id:3, name:"Sapphire Necklace", description: "deep blue necklace which gives your neck wisdom ,loyalty and royalty", price: 35.94, image: "blue-sapphire.jpg"},
    {id:4, name:"Green Scarf" , description: "green scarf that adds an additional accessory to your body", price: 85.20,  image: "greenscarf.jpg"},
    {id:5, name:"Sunglasses", description: "an accessory that a person can wear during the summer", price: 49.78, image: "sunglasses.jpg"},
    {id:6, name:"Boots", description: "footwear that you wear when it is snowing and cold outside", price: 63.29, image: "boots.jpg"},
    {id:7, name:"Sephora citrus perfume", description: "a perfume when sprayed gives you a citrusy appearance", price: 55.10, image: "sephoracitrus.jpg"}
  ];

  constructor() {}

  getAllProducts() {
    return this.boutiqueItems;
  }

  getOneProduct(id: number) {
    return this.boutiqueItems.find(item => item.id === id);
  }
}
