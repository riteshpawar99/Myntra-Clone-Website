import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { Zap } from "lucide-react";

const GenZ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-10 h-10 text-accent animate-pulse" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                GenZ Fashion
              </h1>
              <Zap className="w-10 h-10 text-accent animate-pulse" />
            </div>
            <p className="text-lg text-muted-foreground">Vibe Check ✨ Street Style & Urban Trends</p>
          </div>
          <ProductGrid category="genz" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GenZ;
