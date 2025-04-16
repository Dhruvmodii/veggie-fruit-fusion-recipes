
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from '@/components/layout/Header';
import SelectedIngredientsList from '@/components/SelectedIngredientsList';
import SearchIngredients from '@/components/SearchIngredients';
import RecipeGenerator from '@/components/RecipeGenerator';
import { useRecipe } from '@/contexts/RecipeContext';
import { ScrollArea } from '@/components/ui/scroll-area';

const Index = () => {
  const { selectedIngredients, removeIngredient } = useRecipe();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="grid gap-6">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Veggie Fruit Fusion</h1>
            <p className="text-muted-foreground">
              Create delicious recipes by combining vegetables and fruits. Select your ingredients below and let us inspire your next culinary creation.
            </p>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Selected Ingredients</CardTitle>
              <CardDescription>
                Choose the ingredients you have or want to use in your recipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <SelectedIngredientsList 
                ingredients={selectedIngredients} 
                onRemove={removeIngredient} 
              />
            </CardContent>
          </Card>
          
          <Tabs defaultValue="generate" className="space-y-4">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="generate">Generate Recipe</TabsTrigger>
              <TabsTrigger value="ingredients">Browse Ingredients</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generate" className="space-y-4">
              <RecipeGenerator />
            </TabsContent>
            
            <TabsContent value="ingredients" className="space-y-4">
              <SearchIngredients />
            </TabsContent>
          </Tabs>
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

export default Index;
