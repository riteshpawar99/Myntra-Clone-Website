import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useApp } from "@/contexts/AppContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart } = useApp();

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const savings = cart.reduce((sum, item) => sum + (item.originalPrice - item.price), 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8 pb-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8 animate-fade-in">Shopping Bag</h1>
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">Your bag is empty</p>
              <p className="text-sm text-muted-foreground">Add items to get started!</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border rounded-lg bg-card animate-fade-in">
                    <img src={item.image} alt={item.title} className="w-24 h-32 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.brand}</h3>
                      <p className="text-sm text-muted-foreground">{item.title}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="font-bold">₹{item.price}</span>
                        <span className="text-sm text-muted-foreground line-through">₹{item.originalPrice}</span>
                        <span className="text-sm font-semibold text-accent">({item.discount}% OFF)</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="lg:col-span-1">
                <div className="border rounded-lg p-6 bg-card sticky top-24">
                  <h2 className="text-xl font-bold mb-4">Price Details</h2>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Total MRP</span>
                      <span>₹{total + savings}</span>
                    </div>
                    <div className="flex justify-between text-accent">
                      <span>Discount on MRP</span>
                      <span>-₹{savings}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Convenience Fee</span>
                      <span className="text-accent">FREE</span>
                    </div>
                    <hr />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Amount</span>
                      <span>₹{total}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6" size="lg">
                    PLACE ORDER
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
