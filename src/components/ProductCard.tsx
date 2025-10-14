import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  brand: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
}

const ProductCard = ({ image, brand, title, price, originalPrice, discount }: ProductCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-muted aspect-[3/4] mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/90 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
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
