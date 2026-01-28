export interface BoutiqueProductItem{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;
}

export interface BoutiqueCart extends BoutiqueProductItem {
    quantity: number;
}