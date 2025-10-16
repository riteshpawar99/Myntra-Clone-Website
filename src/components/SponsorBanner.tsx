const SponsorBanner = () => {
  return (
    <div className="w-full bg-white border-y hover:bg-muted/20 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center gap-3 group cursor-pointer">
            <span className="text-sm text-muted-foreground font-medium">Associate Sponsor</span>
            <div className="text-xl font-bold text-foreground hover:text-primary transition-colors duration-300 group-hover:scale-110 transition-transform">U.S. POLO ASSN.</div>
          </div>
          
          <div className="flex items-center justify-center gap-3 border-x px-4 group cursor-pointer">
            <span className="text-sm text-muted-foreground font-medium">Title Sponsor</span>
            <div className="bg-[hsl(0,60%,30%)] text-white px-4 py-2 font-bold text-xl hover:scale-110 transition-transform duration-300">BIBA</div>
          </div>
          
          <div className="flex items-center justify-center gap-3 group cursor-pointer">
            <span className="text-sm text-muted-foreground font-medium">Associate Sponsor</span>
            <div className="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300 group-hover:scale-110 transition-transform">realme</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;
