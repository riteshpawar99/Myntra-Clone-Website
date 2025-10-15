import { Search, Heart, ShoppingBag, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { cart, wishlist, searchQuery, setSearchQuery } = useApp();
  const [localSearch, setLocalSearch] = useState(searchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(localSearch);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <svg viewBox="0 0 50 50" className="w-12 h-12">
                  <defs>
                    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "hsl(330, 81%, 48%)" }} />
                      <stop offset="100%" style={{ stopColor: "hsl(25, 95%, 53%)" }} />
                    </linearGradient>
                  </defs>
                  <path d="M 5 40 L 5 10 L 15 25 L 25 10 L 25 40 M 25 10 L 35 25 L 45 10 L 45 40" 
                    fill="none" 
                    stroke="url(#logo-gradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
            
            {/* Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/men" className="text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                MEN
              </Link>
              <Link to="/women" className="text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                WOMEN
              </Link>
              <Link to="/kids" className="text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                KIDS
              </Link>
              <Link to="/" className="text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                HOME
              </Link>
              <Link to="/" className="text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                BEAUTY
              </Link>
              <Link to="/" className="text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                GENZ
              </Link>
              <Link to="/" className="relative text-sm font-bold text-foreground hover:border-b-4 hover:border-primary pb-6 pt-6 transition-all uppercase tracking-wide">
                STUDIO
                <Badge className="absolute -top-1 -right-8 bg-red-500 text-white text-[9px] px-1.5 py-0">NEW</Badge>
              </Link>
            </nav>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-6">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search for products, brands and more"
                className="w-[400px] pl-11 bg-muted border-0 rounded-sm h-10 transition-shadow focus:shadow-md"
              />
            </form>
            
            <div className="flex items-center gap-6">
              <button className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-all hover:scale-105">
                <User className="h-5 w-5" />
                <span className="text-xs font-semibold">Profile</span>
              </button>
              
              <button 
                onClick={() => navigate("/wishlist")}
                className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-all hover:scale-105 relative"
              >
                <Heart className="h-5 w-5" />
                <span className="text-xs font-semibold">Wishlist</span>
                {wishlist.length > 0 && (
                  <Badge className="absolute -top-1 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-primary">
                    {wishlist.length}
                  </Badge>
                )}
              </button>
              
              <button 
                onClick={() => navigate("/cart")}
                className="flex flex-col items-center gap-0.5 hover:opacity-70 transition-all hover:scale-105 relative"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="text-xs font-semibold">Bag</span>
                {cart.length > 0 && (
                  <Badge className="absolute -top-1 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-primary">
                    {cart.length}
                  </Badge>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
