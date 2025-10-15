import { useRef } from "react";

interface PriceCard {
  image: string;
  title: string;
  originalPrice: number;
  salePrice: number;
}

const PocketFriendlySection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cards: PriceCard[] = [
    { image: "/placeholder.svg", title: "BB & CC Creams", originalPrice: 399, salePrice: 149 },
    { image: "/placeholder.svg", title: "Supportive Bras", originalPrice: 1099, salePrice: 399 },
    { image: "/placeholder.svg", title: "Easy Casual Shoes", originalPrice: 2499, salePrice: 699 },
    { image: "/placeholder.svg", title: "Chic Co-Ords", originalPrice: 1949, salePrice: 699 },
    { image: "/placeholder.svg", title: "Elegant Dresses", originalPrice: 1549, salePrice: 499 },
    { image: "/placeholder.svg", title: "Striking Flats", originalPrice: 1549, salePrice: 549 },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[hsl(0,60%,40%)]">
          POCKET FRIENDLY PRICES
        </h2>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] snap-start"
              >
                <div className="relative rounded-2xl overflow-hidden border-4 border-dashed border-[hsl(45,93%,58%)] bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="aspect-[3/4] bg-muted">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-lg font-bold mb-1">
                      UNDER <span className="line-through">₹{card.originalPrice}</span> ₹{card.salePrice}
                    </p>
                    <p className="text-white/90 text-sm">{card.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocketFriendlySection;
