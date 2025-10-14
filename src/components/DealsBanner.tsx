const DealsBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[hsl(40,80%,85%)] via-[hsl(40,90%,75%)] to-[hsl(40,80%,85%)] border-y-4 border-[hsl(25,95%,53%)] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-30 blur-xl"></div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 opacity-30 blur-xl"></div>
      
      <div className="container mx-auto px-4 py-6 text-center relative z-10">
        <div className="inline-block bg-gradient-to-r from-[hsl(0,60%,35%)] to-[hsl(0,60%,25%)] text-white px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-transform">
          <h2 className="text-3xl md:text-4xl font-bold mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
            DHAMAKEDAR DEALS
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <p className="text-lg font-semibold">Big Savings All Day</p>
            <span className="bg-white text-[hsl(0,60%,30%)] rounded-full w-6 h-6 flex items-center justify-center font-bold">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsBanner;
