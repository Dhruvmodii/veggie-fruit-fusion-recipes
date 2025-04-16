
import React from 'react';
import { Ingredient } from '@/types';
import { Plus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface IngredientCardProps {
  ingredient: Ingredient;
  isSelected: boolean;
  onSelect: () => void;
  onRemove?: () => void;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ 
  ingredient, 
  isSelected, 
  onSelect,
  onRemove 
}) => {
  const handleClick = () => {
    if (isSelected && onRemove) {
      onRemove();
    } else {
      onSelect();
    }
  };

  return (
    <div 
      className={cn(
        "flex flex-col items-center p-3 rounded-lg border transition-all duration-200",
        "cursor-pointer hover:shadow-md",
        isSelected 
          ? ingredient.type === 'vegetable'
            ? "bg-veggie-light/10 border-veggie" 
            : "bg-fruit-light/10 border-fruit"
          : "bg-card border-border hover:border-primary"
      )}
      onClick={handleClick}
    >
      <div className="text-4xl mb-2">{ingredient.image}</div>
      <h3 className="font-medium text-center">{ingredient.name}</h3>
      <Button 
        size="sm" 
        variant={isSelected ? "secondary" : "outline"} 
        className={cn(
          "mt-2 w-full",
          isSelected 
            ? ingredient.type === 'vegetable' 
              ? "bg-veggie text-white hover:bg-veggie-dark" 
              : "bg-fruit text-white hover:bg-fruit-dark"
            : ""
        )}
      >
        {isSelected ? (
          <>
            <Check className="h-4 w-4 mr-1" />
            Selected
          </>
        ) : (
          <>
            <Plus className="h-4 w-4 mr-1" />
            Add
          </>
        )}
      </Button>
    </div>
  );
};

export default IngredientCard;
