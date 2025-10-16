const PromoBanner = () => {
  return (
    <div className="w-full bg-[hsl(40,30%,96%)] border-b overflow-hidden relative group">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="text-2xl md:text-3xl font-serif font-bold text-[hsl(38,92%,50%)] tracking-wide animate-pulse">
            FLAT ₹500 OFF
          </span>
        </div>
        <div className="bg-gradient-to-r from-[hsl(25,95%,60%)] to-[hsl(25,95%,53%)] text-white px-6 py-2 transform -skew-x-6 shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="skew-x-6">
            <p className="text-sm font-bold">On Your 1<sup>st</sup> Purchase</p>
            <p className="text-xs">Via <span className="font-bold">App!</span></p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </div>
  );
};

export default PromoBanner;
