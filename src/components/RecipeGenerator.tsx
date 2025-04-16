
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRecipe } from '@/contexts/RecipeContext';
import { Sparkles, RefreshCw, Trash2 } from 'lucide-react';
import RecipeCard from '@/components/RecipeCard';

const RecipeGenerator: React.FC = () => {
  const { 
    selectedIngredients, 
    generatedRecipe, 
    generateNewRecipe, 
    clearIngredients,
    toggleFavorite 
  } = useRecipe();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateRecipe = () => {
    setIsGenerating(true);
    // Simulate a loading state for better UX
    setTimeout(() => {
      generateNewRecipe();
      setIsGenerating(false);
    }, 800);
  };

  const canGenerate = selectedIngredients.length > 0;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 justify-between items-center">
        <Button
          onClick={handleGenerateRecipe}
          disabled={!canGenerate || isGenerating}
          size="lg"
          className={isGenerating ? "animate-pulse" : ""}
        >
          {isGenerating ? (
            <>
              <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Recipe
            </>
          )}
        </Button>
        
        <Button 
          variant="outline" 
          onClick={clearIngredients}
          disabled={selectedIngredients.length === 0}
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear All
        </Button>
      </div>

      {!canGenerate && (
        <div className="bg-muted p-8 rounded-lg text-center">
          <p className="text-muted-foreground">
            Select at least one ingredient to generate a recipe
          </p>
        </div>
      )}
      
      {generatedRecipe && (
        <div className="mt-8">
          <h2 className="font-bold text-xl mb-4 flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-accent" />
            Your Recipe Creation
          </h2>
          <RecipeCard 
            recipe={generatedRecipe} 
            onFavoriteToggle={toggleFavorite}
            isDetailed={true}
          />
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;
