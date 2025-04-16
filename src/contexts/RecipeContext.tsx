
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Recipe, Ingredient } from '@/types';
import { generateRecipe } from '@/utils/recipeGenerator';
import { allIngredients } from '@/data/ingredients';

interface RecipeContextType {
  selectedIngredients: Ingredient[];
  recipes: Recipe[];
  favoriteRecipes: Recipe[];
  generatedRecipe: Recipe | null;
  addIngredient: (ingredient: Ingredient) => void;
  removeIngredient: (id: string) => void;
  clearIngredients: () => void;
  generateNewRecipe: () => void;
  toggleFavorite: (recipeId: string) => void;
  searchIngredient: (query: string) => Ingredient[];
}

const RecipeContext = createContext<RecipeContextType | undefined>(undefined);

export const RecipeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);

  // Load saved data from localStorage on initial render
  useEffect(() => {
    const savedRecipes = localStorage.getItem('recipes');
    const savedFavorites = localStorage.getItem('favoriteRecipes');
    
    if (savedRecipes) {
      setRecipes(JSON.parse(savedRecipes));
    }
    
    if (savedFavorites) {
      setFavoriteRecipes(JSON.parse(savedFavorites));
    }
  }, []);

  // Save to localStorage whenever recipes or favorites change
  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  useEffect(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  const addIngredient = (ingredient: Ingredient) => {
    if (!selectedIngredients.some(ing => ing.id === ingredient.id)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const removeIngredient = (id: string) => {
    setSelectedIngredients(selectedIngredients.filter(ing => ing.id !== id));
  };

  const clearIngredients = () => {
    setSelectedIngredients([]);
    setGeneratedRecipe(null);
  };

  const generateNewRecipe = () => {
    if (selectedIngredients.length === 0) return;

    try {
      const newRecipe = generateRecipe(selectedIngredients);
      setGeneratedRecipe(newRecipe);
      setRecipes([newRecipe, ...recipes]);
    } catch (error) {
      console.error("Failed to generate recipe:", error);
    }
  };

  const toggleFavorite = (recipeId: string) => {
    // Update in main recipes list
    const updatedRecipes = recipes.map(recipe => 
      recipe.id === recipeId 
        ? { ...recipe, isFavorite: !recipe.isFavorite } 
        : recipe
    );
    setRecipes(updatedRecipes);
    
    // Update generated recipe if it's the one being favorited
    if (generatedRecipe && generatedRecipe.id === recipeId) {
      setGeneratedRecipe({
        ...generatedRecipe,
        isFavorite: !generatedRecipe.isFavorite
      });
    }
    
    // Update favorites list
    const recipe = recipes.find(r => r.id === recipeId);
    if (recipe) {
      if (recipe.isFavorite) {
        // Remove from favorites
        setFavoriteRecipes(favoriteRecipes.filter(r => r.id !== recipeId));
      } else {
        // Add to favorites
        const updatedRecipe = { ...recipe, isFavorite: true };
        setFavoriteRecipes([updatedRecipe, ...favoriteRecipes]);
      }
    }
  };

  const searchIngredient = (query: string): Ingredient[] => {
    if (!query.trim()) return allIngredients;
    
    const lowerCaseQuery = query.toLowerCase();
    return allIngredients.filter(ingredient => 
      ingredient.name.toLowerCase().includes(lowerCaseQuery)
    );
  };

  const value = {
    selectedIngredients,
    recipes,
    favoriteRecipes,
    generatedRecipe,
    addIngredient,
    removeIngredient,
    clearIngredients,
    generateNewRecipe,
    toggleFavorite,
    searchIngredient
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipe = (): RecipeContextType => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipe must be used within a RecipeProvider');
  }
  return context;
};
