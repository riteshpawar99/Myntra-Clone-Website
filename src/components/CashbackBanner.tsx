const CashbackBanner = () => {
  return (
    <div className="w-full bg-white border-b hover:bg-muted/10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-2 border-dashed border-blue-300 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group">
          <div className="flex gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-3 py-2 rounded font-bold text-sm group-hover:scale-110 transition-transform duration-300">
              CARD
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white px-3 py-2 rounded font-bold text-sm group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: '0.1s' }}>
              CASH
            </div>
          </div>
          <div>
            <p className="text-lg font-bold text-foreground animate-pulse">Flat 7.5% Cashback*</p>
            <p className="text-xs text-muted-foreground">Up To ₹4,000 Per Quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CashbackBanner;
