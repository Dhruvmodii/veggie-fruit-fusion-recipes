
export interface RecipeTemplate {
  title: string;
  ingredientCount: number;
  baseInstructions: string[];
  preparationTime: number;
  servings: number;
}

export const recipeTemplates: RecipeTemplate[] = [
  {
    title: "Stir-Fry Delight",
    ingredientCount: 4,
    baseInstructions: [
      "Wash and chop all vegetables and fruits into bite-sized pieces.",
      "Heat a tablespoon of oil in a large pan over medium heat.",
      "Add the vegetables and stir-fry for 3-4 minutes until tender-crisp.",
      "Add the fruits and cook for another 1-2 minutes.",
      "Season with salt, pepper, and your favorite herbs.",
      "Serve hot over rice or noodles."
    ],
    preparationTime: 20,
    servings: 2
  },
  {
    title: "Fresh Fusion Salad",
    ingredientCount: 5,
    baseInstructions: [
      "Wash all produce thoroughly.",
      "Dice the vegetables and fruits into similar sized pieces.",
      "Combine all ingredients in a large bowl.",
      "Drizzle with olive oil and a splash of lemon juice.",
      "Season with salt, pepper, and herbs to taste.",
      "Toss gently and serve immediately."
    ],
    preparationTime: 15,
    servings: 2
  },
  {
    title: "Baked Medley",
    ingredientCount: 4,
    baseInstructions: [
      "Preheat oven to 375°F (190°C).",
      "Wash and cut all vegetables and fruits into chunks.",
      "Toss with olive oil, salt, pepper, and herbs.",
      "Spread evenly on a baking sheet.",
      "Bake for 25-30 minutes, turning halfway through.",
      "Serve hot as a side dish or over grains."
    ],
    preparationTime: 40,
    servings: 4
  },
  {
    title: "Veggie-Fruit Smoothie",
    ingredientCount: 3,
    baseInstructions: [
      "Wash all ingredients thoroughly.",
      "Cut the produce into small pieces.",
      "Add to a blender with 1 cup of water or plant-based milk.",
      "Blend until smooth.",
      "Add honey or maple syrup to taste if desired.",
      "Pour into glasses and serve immediately."
    ],
    preparationTime: 10,
    servings: 2
  },
  {
    title: "Garden Soup",
    ingredientCount: 4,
    baseInstructions: [
      "Wash and chop all produce.",
      "Heat olive oil in a large pot over medium heat.",
      "Add vegetables and sauté for 5 minutes.",
      "Add 4 cups of vegetable broth and bring to a boil.",
      "Reduce heat and simmer for 15-20 minutes.",
      "Add fruits in the last 5 minutes of cooking.",
      "Season with salt, pepper, and herbs.",
      "Serve hot with crusty bread."
    ],
    preparationTime: 35,
    servings: 4
  }
];
