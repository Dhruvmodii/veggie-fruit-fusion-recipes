
import { Ingredient } from '@/types';

export const vegetables: Ingredient[] = [
  { id: 'v1', name: 'Tomato', type: 'vegetable', image: '🍅' },
  { id: 'v2', name: 'Carrot', type: 'vegetable', image: '🥕' },
  { id: 'v3', name: 'Broccoli', type: 'vegetable', image: '🥦' },
  { id: 'v4', name: 'Spinach', type: 'vegetable', image: '🍃' },
  { id: 'v5', name: 'Bell Pepper', type: 'vegetable', image: '🫑' },
  { id: 'v6', name: 'Onion', type: 'vegetable', image: '🧅' },
  { id: 'v7', name: 'Cucumber', type: 'vegetable', image: '🥒' },
  { id: 'v8', name: 'Potato', type: 'vegetable', image: '🥔' },
  { id: 'v9', name: 'Garlic', type: 'vegetable', image: '🧄' },
  { id: 'v10', name: 'Zucchini', type: 'vegetable', image: '🥬' },
];

export const fruits: Ingredient[] = [
  { id: 'f1', name: 'Apple', type: 'fruit', image: '🍎' },
  { id: 'f2', name: 'Banana', type: 'fruit', image: '🍌' },
  { id: 'f3', name: 'Orange', type: 'fruit', image: '🍊' },
  { id: 'f4', name: 'Strawberry', type: 'fruit', image: '🍓' },
  { id: 'f5', name: 'Blueberry', type: 'fruit', image: '🫐' },
  { id: 'f6', name: 'Lemon', type: 'fruit', image: '🍋' },
  { id: 'f7', name: 'Pineapple', type: 'fruit', image: '🍍' },
  { id: 'f8', name: 'Mango', type: 'fruit', image: '🥭' },
  { id: 'f9', name: 'Avocado', type: 'fruit', image: '🥑' },
  { id: 'f10', name: 'Watermelon', type: 'fruit', image: '🍉' },
];

export const allIngredients = [...vegetables, ...fruits];
