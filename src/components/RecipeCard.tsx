
import React from 'react';
import { Recipe } from '@/types';
import { Heart, Clock, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RecipeCardProps {
  recipe: Recipe;
  onFavoriteToggle: (id: string) => void;
  isDetailed?: boolean;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  recipe, 
  onFavoriteToggle,
  isDetailed = false 
}) => {
  return (
    <Card className={cn(
      "overflow-hidden transition-all duration-300 h-full",
      isDetailed ? "border-accent shadow-lg" : "hover:shadow-md"
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold flex items-center">
            <span className="text-2xl mr-2">{recipe.image}</span>
            {recipe.title}
          </CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onFavoriteToggle(recipe.id);
            }}
            className={cn(
              "hover:bg-transparent",
              recipe.isFavorite ? "text-red-500" : "text-muted-foreground"
            )}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                recipe.isFavorite ? "fill-current" : ""
              )}
            />
          </Button>
        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1">
          <Clock className="h-4 w-4 mr-1" />
          <span>{recipe.cookTime} mins</span>
          <Users className="h-4 w-4 ml-3 mr-1" />
          <span>{recipe.servings} servings</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold mb-1 text-sm">Ingredients:</h3>
          <div className="flex flex-wrap gap-1.5">
            {recipe.ingredients.map((ingredient, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-0.5 bg-muted rounded-full text-xs"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
        {isDetailed && (
          <div>
            <h3 className="font-semibold mb-1 text-sm">Instructions:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </CardContent>
      {!isDetailed && (
        <CardFooter className="pt-0">
          <Button variant="ghost" className="text-accent hover:text-accent-foreground">
            Show Full Recipe
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default RecipeCard;
