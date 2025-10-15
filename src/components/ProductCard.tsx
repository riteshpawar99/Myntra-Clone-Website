import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useApp } from "@/contexts/AppContext";

interface ProductCardProps {
  id: string;
  image: string;
  brand: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
}

const ProductCard = ({ id, image, brand, title, price, originalPrice, discount }: ProductCardProps) => {
  const { addToWishlist, removeFromWishlist, isInWishlist, addToCart } = useApp();
  const inWishlist = isInWishlist(id);

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({ id, image, brand, title, price, originalPrice, discount });
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, image, brand, title, price, originalPrice, discount });
  };

  return (
    <div className="group cursor-pointer animate-fade-in">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4] mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        <Button
          variant="ghost"
          size="icon"
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 bg-white/90 hover:bg-white transition-all duration-300 ${
            inWishlist ? "text-primary scale-110" : ""
          }`}
        >
          <Heart className={`h-4 w-4 transition-all ${inWishlist ? "fill-current" : ""}`} />
        </Button>

        <Button
          variant="default"
          size="sm"
          onClick={handleAddToCart}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
        >
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Bag
        </Button>
      </div>
      
      <div className="space-y-1">
        <h3 className="font-semibold text-sm">{brand}</h3>
        <p className="text-sm text-muted-foreground line-clamp-1">{title}</p>
        <div className="flex items-center gap-2">
          <span className="font-bold">₹{price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{originalPrice}</span>
          <span className="text-sm font-semibold text-accent">({discount}% OFF)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
