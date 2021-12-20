export enum Category {
  MEAT = 'Meat',
  SEAFOOD = 'Seafood',
  DELICATESSEN = 'Delicatessen',
  GREEN_GROCERY = 'Green Grocery',
  BREAD = 'Bread',
  BEVERAGES = 'Beverages',
  HEALTH_BEAUTY = 'Health & Beauty',
  DAIRY = 'Dairy',
}

export interface IProductModel {
  name: string;
  description?: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

export interface ICartItem {
  name: string;
  quantity: number;
  amount: number;
}
