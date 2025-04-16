
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { useRecipe } from '@/contexts/RecipeContext';
import { Ingredient } from '@/types';
import IngredientCard from '@/components/IngredientCard';
import { vegetables, fruits } from '@/data/ingredients';

const SearchIngredients: React.FC = () => {
  const { 
    selectedIngredients, 
    addIngredient, 
    removeIngredient,
    searchIngredient
  } = useRecipe();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState<Ingredient[]>([]);
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    let results = searchIngredient(searchQuery);
    
    if (activeTab === 'vegetables') {
      results = results.filter(ing => ing.type === 'vegetable');
    } else if (activeTab === 'fruits') {
      results = results.filter(ing => ing.type === 'fruit');
    }
    
    setFilteredIngredients(results);
  }, [searchQuery, activeTab, searchIngredient]);

  const isSelected = (id: string) => {
    return selectedIngredients.some(ing => ing.id === id);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
        <Input
          placeholder="Search ingredients..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="vegetables" className="text-veggie">
            Vegetables
          </TabsTrigger>
          <TabsTrigger value="fruits" className="text-fruit">
            Fruits
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredIngredients.map(ingredient => (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                isSelected={isSelected(ingredient.id)}
                onSelect={() => addIngredient(ingredient)}
                onRemove={() => removeIngredient(ingredient.id)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="vegetables" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredIngredients.map(ingredient => (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                isSelected={isSelected(ingredient.id)}
                onSelect={() => addIngredient(ingredient)}
                onRemove={() => removeIngredient(ingredient.id)}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="fruits" className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {filteredIngredients.map(ingredient => (
              <IngredientCard
                key={ingredient.id}
                ingredient={ingredient}
                isSelected={isSelected(ingredient.id)}
                onSelect={() => addIngredient(ingredient)}
                onRemove={() => removeIngredient(ingredient.id)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchIngredients;
