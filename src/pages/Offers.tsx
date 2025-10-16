import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Gift, Percent, Zap, Star } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      icon: Percent,
      title: "Flat 70% OFF",
      desc: "On select fashion items",
      code: "FASHION70",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Gift,
      title: "Buy 2 Get 1 Free",
      desc: "On all footwear",
      code: "BOGO1",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Flash Sale",
      desc: "Limited time only",
      code: "FLASH24",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      title: "₹500 Cashback",
      desc: "On orders above ₹2999",
      code: "CASH500",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 text-center animate-fade-in">
            🎉 Amazing Offers & Deals
          </h1>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-xl border overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                <div className="relative z-10">
                  <offer.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
                  <p className="text-muted-foreground mb-4">{offer.desc}</p>
                  <Badge className="text-sm px-4 py-2 group-hover:scale-110 transition-transform duration-300">
                    Code: {offer.code}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-8 rounded-xl border animate-fade-in">
            <h2 className="text-2xl font-bold mb-4 text-center">Bank Offers</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {["HDFC Bank", "ICICI Bank", "SBI Cards"].map((bank, idx) => (
                <div key={idx} className="p-4 bg-background rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <p className="font-bold">{bank}</p>
                  <p className="text-sm text-muted-foreground">10% Instant Discount</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
