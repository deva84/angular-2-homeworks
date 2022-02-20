export interface ICartItem {
  id: number;
  name: string;
  quantity: number;
  amount: number;
  img_xsmall: string;
}

export interface ICartItemData extends ICartItem {
  price: number;
}
