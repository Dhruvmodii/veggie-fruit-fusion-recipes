
import React from 'react';
import { Ingredient } from '@/types';
import { X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SelectedIngredientsListProps {
  ingredients: Ingredient[];
  onRemove: (id: string) => void;
}

const SelectedIngredientsList: React.FC<SelectedIngredientsListProps> = ({ 
  ingredients, 
  onRemove 
}) => {
  if (ingredients.length === 0) {
    return (
      <div className="text-center text-muted-foreground p-4">
        No ingredients selected yet. Add some from below!
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-2 p-2">
      {ingredients.map(ingredient => (
        <Badge 
          key={ingredient.id}
          variant="outline"
          className={cn(
            "px-3 py-1.5 text-sm flex items-center gap-1",
            ingredient.type === 'vegetable' 
              ? "bg-veggie-light/20 border-veggie" 
              : "bg-fruit-light/20 border-fruit"
          )}
        >
          <span className="mr-1">{ingredient.image}</span>
          {ingredient.name}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onRemove(ingredient.id);
            }}
            className="ml-1 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
    </div>
  );
};

import { cn } from '@/lib/utils';
export default SelectedIngredientsList;
