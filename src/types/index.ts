
export interface Ingredient {
  id: string;
  name: string;
  type: 'vegetable' | 'fruit';
  image: string;
}

export interface Recipe {
  id: string;
  title: string;
  ingredients: string[];
  instructions: string[];
  cookTime: number;
  servings: number;
  image?: string;
  isFavorite?: boolean;
}
