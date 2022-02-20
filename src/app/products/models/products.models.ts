export enum Category {
  MEAT = 'meat',
  SEAFOOD = 'seafood',
  DELICATESSEN = 'delicatessen',
  GREEN_GROCERY = 'green grocery',
  BREAD = 'bread',
  BEVERAGES = 'beverages',
  HEALTH_BEAUTY = 'health & beauty',
  DAIRY = 'dairy',
}

export interface IProductModel {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  img_large: string;
  img_medium: string;
  img_small: string;
  img_xsmall: string;
}
