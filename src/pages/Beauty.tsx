import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Beauty = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in">Beauty & Personal Care</h1>
          <ProductGrid category="beauty" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Beauty;
