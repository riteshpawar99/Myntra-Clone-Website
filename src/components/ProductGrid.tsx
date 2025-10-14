import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const ProductGrid = () => {
  const products = [
    {
      image: product1,
      brand: "H&M",
      title: "Men Pure Cotton T-shirt",
      price: 499,
      originalPrice: 999,
      discount: 50,
    },
    {
      image: product2,
      brand: "Levi's",
      title: "Men Blue Slim Fit Jeans",
      price: 1999,
      originalPrice: 3999,
      discount: 50,
    },
    {
      image: product3,
      brand: "Zara",
      title: "Women Red Maxi Dress",
      price: 1499,
      originalPrice: 2999,
      discount: 50,
    },
    {
      image: product4,
      brand: "Jack & Jones",
      title: "Men Black Leather Jacket",
      price: 2999,
      originalPrice: 5999,
      discount: 50,
    },
    {
      image: product5,
      brand: "Nike",
      title: "Unisex Running Shoes",
      price: 3499,
      originalPrice: 6999,
      discount: 50,
    },
    {
      image: product6,
      brand: "Only",
      title: "Women Floral Summer Dress",
      price: 899,
      originalPrice: 1799,
      discount: 50,
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">TRENDING NOW</h2>
          <div className="flex gap-4">
            <select className="border rounded-md px-4 py-2 text-sm bg-background">
              <option>Sort by: Popularity</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
