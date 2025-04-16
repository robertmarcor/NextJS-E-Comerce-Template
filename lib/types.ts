export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  imageSrc: string;
  stripeRef?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
}
