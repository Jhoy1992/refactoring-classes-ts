export interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

export type FoodAdd = Omit<Food, "available">;

export type FoodEdit = Omit<Food, "available">;
