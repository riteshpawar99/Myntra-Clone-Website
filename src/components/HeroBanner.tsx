import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[hsl(240,50%,15%)] to-[hsl(240,50%,10%)]">
      <div className="relative h-[450px] md:h-[550px]">
        <img
          src={heroBanner}
          alt="Diwali Sale - Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-between gap-8 md:gap-16 max-w-6xl mx-auto px-4">
              <div className="flex-1 text-left">
                <h2 className="text-4xl md:text-6xl font-bold text-[hsl(45,93%,58%)] mb-2" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
                  SHUBH
                </h2>
                <h2 className="text-4xl md:text-6xl font-bold text-[hsl(45,93%,58%)]" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
                  SAVINGS
                </h2>
              </div>
              
              <div className="flex-1 text-right">
                <h2 className="text-3xl md:text-5xl font-bold text-[hsl(45,93%,58%)] mb-2" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
                  BACK BY
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-[hsl(45,93%,58%)]" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
                  POPULAR
                </h2>
                <h2 className="text-3xl md:text-5xl font-bold text-[hsl(45,93%,58%)]" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
                  DEMAND
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
