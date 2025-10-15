import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { useApp } from "@/contexts/AppContext";

const Wishlist = () => {
  const { wishlist } = useApp();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in">My Wishlist</h1>
          {wishlist.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">Your wishlist is empty</p>
              <p className="text-sm text-muted-foreground">Add items you love to your wishlist!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
              {wishlist.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
