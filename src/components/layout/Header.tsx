
import { Button } from "@/components/ui/button";
import { Utensils, Heart, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-background sticky top-0 z-10 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-2">
          <Utensils className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-veggie to-fruit bg-clip-text text-transparent">
            Veggie Fruit Fusion
          </h1>
        </Link>
        
        <nav className="flex items-center space-x-2">
          <Button 
            variant={location.pathname === "/" ? "default" : "ghost"}
            asChild
            size="sm"
          >
            <Link to="/">
              <Utensils className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Recipe Generator</span>
            </Link>
          </Button>
          
          <Button 
            variant={location.pathname === "/favorites" ? "default" : "ghost"}
            asChild
            size="sm"
          >
            <Link to="/favorites">
              <Heart className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Favorites</span>
            </Link>
          </Button>
          
          <Button 
            variant={location.pathname === "/about" ? "default" : "ghost"}
            asChild
            size="sm"
          >
            <Link to="/about">
              <Info className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">About</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
