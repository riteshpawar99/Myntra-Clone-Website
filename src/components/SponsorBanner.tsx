const SponsorBanner = () => {
  return (
    <div className="w-full bg-white border-y">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground font-medium">Associate Sponsor</span>
            <div className="text-xl font-bold text-foreground">U.S. POLO ASSN.</div>
          </div>
          
          <div className="flex items-center justify-center gap-3 border-x px-4">
            <span className="text-sm text-muted-foreground font-medium">Title Sponsor</span>
            <div className="bg-[hsl(0,60%,30%)] text-white px-4 py-2 font-bold text-xl">BIBA</div>
          </div>
          
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground font-medium">Associate Sponsor</span>
            <div className="text-2xl font-bold text-foreground">realme</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorBanner;
