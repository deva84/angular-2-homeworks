export interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  amount: number;
}

export interface ICartItemData extends ICartItem {
  price: number;
}
