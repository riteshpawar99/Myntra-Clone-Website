import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Sparkles, TrendingUp, Award, Users } from "lucide-react";

const Studio = () => {
  const features = [
    { icon: Sparkles, title: "Exclusive Designs", desc: "Limited edition collections" },
    { icon: TrendingUp, title: "Trending Now", desc: "Latest fashion trends" },
    { icon: Award, title: "Premium Quality", desc: "Top-tier materials" },
    { icon: Users, title: "Community", desc: "Join style enthusiasts" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Myntra Studio
            </h1>
            <p className="text-xl text-muted-foreground">Discover. Shop. Share Your Style</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <feature.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="rounded-lg overflow-hidden border hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-primary group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Studio Collection #{item}</h3>
                  <p className="text-sm text-muted-foreground">Curated by fashion experts</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Studio;
