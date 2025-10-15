import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

interface Product {
  id: string;
  image: string;
  brand: string;
  title: string;
  price: number;
  originalPrice: number;
  discount: number;
}

interface AppContextType {
  wishlist: Product[];
  cart: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  isInCart: (productId: string) => boolean;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addToWishlist = (product: Product) => {
    if (!wishlist.find(item => item.id === product.id)) {
      setWishlist([...wishlist, product]);
      toast({
        title: "Added to Wishlist",
        description: `${product.brand} ${product.title} added to your wishlist`,
      });
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
    toast({
      title: "Removed from Wishlist",
      description: "Item removed from your wishlist",
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  const addToCart = (product: Product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
      toast({
        title: "Added to Bag",
        description: `${product.brand} ${product.title} added to your bag`,
      });
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
    toast({
      title: "Removed from Bag",
      description: "Item removed from your bag",
    });
  };

  const isInCart = (productId: string) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <AppContext.Provider
      value={{
        wishlist,
        cart,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        addToCart,
        removeFromCart,
        isInCart,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};
