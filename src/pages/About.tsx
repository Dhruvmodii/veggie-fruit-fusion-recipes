
import React from 'react';
import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Sparkles, Heart, Github } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container py-6">
        <div className="space-y-6 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">About Veggie Fruit Fusion</h1>
            <p className="text-muted-foreground">
              Learn more about our recipe generator and how it works.
            </p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Utensils className="h-5 w-5 mr-2 text-primary" />
                How It Works
              </CardTitle>
              <CardDescription>
                The science behind our recipe generation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Veggie Fruit Fusion is a creative recipe generator that helps you discover unique dishes by combining vegetables and fruits together.
              </p>
              <p>
                Our application uses a collection of recipe templates and dynamically combines your selected ingredients to create personalized recipes tailored to what you have available.
              </p>
              <p>
                The algorithm takes into account the flavor profiles, textures, and culinary compatibility of different vegetables and fruits to suggest recipes that are both delicious and innovative.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-primary" />
                Features
              </CardTitle>
              <CardDescription>
                Everything you can do with our recipe generator
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Browse and select from a variety of vegetables and fruits</li>
                <li>Generate unique recipes based on your selected ingredients</li>
                <li>Save your favorite recipes for future reference</li>
                <li>Get detailed cooking instructions for each recipe</li>
                <li>Filter ingredients by type (vegetables or fruits)</li>
                <li>Search for specific ingredients by name</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-primary" />
                Why We Built This
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                We believe that cooking should be fun, creative, and accessible to everyone. 
                Our goal is to inspire people to try new ingredient combinations and expand 
                their culinary horizons.
              </p>
              <p>
                By focusing on vegetables and fruits, we also aim to encourage healthier 
                eating habits and help reduce food waste by making it easier to use 
                available ingredients.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="h-5 w-5 mr-2 text-primary" />
                Deployment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                This application can be easily deployed using various platforms. 
                Here's a step-by-step guide:
              </p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Clone the repository from GitHub or download the source code</li>
                <li>Install dependencies with <code className="bg-muted p-1 rounded">npm install</code></li>
                <li>Build the project using <code className="bg-muted p-1 rounded">npm run build</code></li>
                <li>Deploy the build folder to your preferred hosting platform:</li>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Netlify: Connect to your GitHub repository or drag and drop the build folder</li>
                  <li>Vercel: Connect to your repository for automatic deployment</li>
                  <li>GitHub Pages: Push the build folder to a gh-pages branch</li>
                  <li>Firebase: Use Firebase CLI to deploy with <code className="bg-muted p-1 rounded">firebase deploy</code></li>
                </ul>
              </ol>
              <p className="mt-4">
                For local development, simply run <code className="bg-muted p-1 rounded">npm run dev</code> after installing dependencies.
              </p>
            </CardContent>
          </Card>
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

export default About;
