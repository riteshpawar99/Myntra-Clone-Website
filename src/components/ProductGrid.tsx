import { useState } from "react";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import { useApp } from "@/contexts/AppContext";

interface ProductGridProps {
  category?: string;
}

const ProductGrid = ({ category }: ProductGridProps) => {
  const { searchQuery } = useApp();
  const [sortBy, setSortBy] = useState("popularity");

  const allProducts = [
    {
      id: "1",
      image: product1,
      brand: "H&M",
      title: "Men Pure Cotton T-shirt",
      price: 499,
      originalPrice: 999,
      discount: 50,
      category: "men",
    },
    {
      id: "2",
      image: product2,
      brand: "Levi's",
      title: "Men Blue Slim Fit Jeans",
      price: 1999,
      originalPrice: 3999,
      discount: 50,
      category: "men",
    },
    {
      id: "3",
      image: product3,
      brand: "Zara",
      title: "Women Red Maxi Dress",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
      category: "women",
    },
    {
      id: "4",
      image: product4,
      brand: "Jack & Jones",
      title: "Men Black Leather Jacket",
      price: 2999,
      originalPrice: 5999,
      discount: 50,
      category: "men",
    },
    {
      id: "5",
      image: product5,
      brand: "Nike",
      title: "Unisex Running Shoes",
      price: 3499,
      originalPrice: 6999,
      discount: 50,
      category: "kids",
    },
    {
      id: "6",
      image: product6,
      brand: "Only",
      title: "Women Floral Summer Dress",
      price: 899,
      originalPrice: 1799,
      discount: 50,
      category: "women",
    },
  ];

  let filteredProducts = allProducts;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  // Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "newest":
        return 0;
      default:
        return 0;
    }
  });

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            {category ? `${category.toUpperCase()}'S COLLECTION` : searchQuery ? `SEARCH RESULTS FOR "${searchQuery}"` : "TRENDING NOW"}
          </h2>
          <div className="flex gap-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border rounded-md px-4 py-2 text-sm bg-background transition-all hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="popularity">Sort by: Popularity</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>
        
        {sortedProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
