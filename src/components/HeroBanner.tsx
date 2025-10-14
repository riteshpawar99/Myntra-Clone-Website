import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
        <img
          src={heroBanner}
          alt="Fashion Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="container">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                BIGGEST FASHION SALE
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                Upto 70% Off on Latest Trends
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
