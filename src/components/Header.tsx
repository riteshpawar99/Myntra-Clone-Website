import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-primary">Myntra</h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              MEN
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              WOMEN
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              KIDS
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              HOME & LIVING
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
              BEAUTY
            </a>
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search for products, brands and more"
              className="w-[300px] pl-10"
            />
          </div>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Heart className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-bold text-primary-foreground flex items-center justify-center">
              0
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
