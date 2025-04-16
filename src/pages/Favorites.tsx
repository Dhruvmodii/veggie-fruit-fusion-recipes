
import React from 'react';
import Header from '@/components/layout/Header';
import { useRecipe } from '@/contexts/RecipeContext';
import RecipeCard from '@/components/RecipeCard';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const { favoriteRecipes, toggleFavorite } = useRecipe();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold flex items-center">
              <Heart className="h-6 w-6 mr-2 text-red-500 fill-red-500" />
              Favorite Recipes
            </h1>
            <p className="text-muted-foreground">
              Your collection of saved recipes for easy access.
            </p>
          </div>
          
          {favoriteRecipes.length === 0 ? (
            <div className="bg-muted p-12 rounded-lg text-center">
              <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-medium mb-2">No favorite recipes yet</h3>
              <p className="text-muted-foreground">
                Generate some recipes and save your favorites to see them here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteRecipes.map(recipe => (
                <RecipeCard 
                  key={recipe.id} 
                  recipe={recipe} 
                  onFavoriteToggle={toggleFavorite}
                  isDetailed={true}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      
      <footer className="py-6 border-t">
        <div className="container text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Veggie Fruit Fusion. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Favorites;
