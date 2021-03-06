export interface IShopItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
}

export interface ICartItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}
