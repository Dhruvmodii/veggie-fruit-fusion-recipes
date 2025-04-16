
import { Recipe, Ingredient } from '@/types';
import { recipeTemplates } from '@/data/recipeTemplates';

// Generate a unique ID
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 9);
};

// Select a random template that can work with the number of ingredients
const selectTemplate = (ingredientCount: number) => {
  const validTemplates = recipeTemplates.filter(
    template => template.ingredientCount <= ingredientCount
  );
  
  if (validTemplates.length === 0) {
    // If no template matches, use the one with lowest ingredient count
    return recipeTemplates.sort((a, b) => a.ingredientCount - b.ingredientCount)[0];
  }
  
  const randomIndex = Math.floor(Math.random() * validTemplates.length);
  return validTemplates[randomIndex];
};

// Generate recipe instructions with specific ingredients
const generateInstructions = (
  template: typeof recipeTemplates[0],
  ingredients: Ingredient[]
): string[] => {
  const vegetables = ingredients.filter(ing => ing.type === 'vegetable');
  const fruits = ingredients.filter(ing => ing.type === 'fruit');
  
  // Replace generic terms with specific ingredients in instructions
  return template.baseInstructions.map(instruction => {
    let modified = instruction;
    
    if (instruction.includes('vegetables')) {
      const vegNames = vegetables.map(v => v.name).join(', ');
      modified = modified.replace('vegetables', vegNames || 'vegetables');
    }
    
    if (instruction.includes('fruits')) {
      const fruitNames = fruits.map(f => f.name).join(', ');
      modified = modified.replace('fruits', fruitNames || 'fruits');
    }
    
    return modified;
  });
};

// Generate a meaningful title based on ingredients
const generateTitle = (
  baseTitle: string,
  ingredients: Ingredient[]
): string => {
  // Get up to 2 random ingredients to feature in the title
  const shuffled = [...ingredients].sort(() => 0.5 - Math.random());
  const featured = shuffled.slice(0, Math.min(2, shuffled.length));
  
  if (featured.length === 0) return baseTitle;
  
  const featuredNames = featured.map(ing => ing.name);
  return `${featuredNames.join(' & ')} ${baseTitle}`;
};

// Main function to generate a recipe based on selected ingredients
export const generateRecipe = (selectedIngredients: Ingredient[]): Recipe => {
  if (selectedIngredients.length === 0) {
    throw new Error('No ingredients selected');
  }
  
  const template = selectTemplate(selectedIngredients.length);
  const instructions = generateInstructions(template, selectedIngredients);
  const title = generateTitle(template.title, selectedIngredients);
  
  return {
    id: generateId(),
    title,
    ingredients: selectedIngredients.map(ing => ing.name),
    instructions,
    cookTime: template.preparationTime,
    servings: template.servings,
    image: selectedIngredients[0]?.image || '🍽️',
    isFavorite: false
  };
};
