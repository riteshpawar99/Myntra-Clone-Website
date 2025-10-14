import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t mt-12">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">ONLINE SHOPPING</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Men</a></li>
              <li><a href="#" className="hover:text-foreground">Women</a></li>
              <li><a href="#" className="hover:text-foreground">Kids</a></li>
              <li><a href="#" className="hover:text-foreground">Home & Living</a></li>
              <li><a href="#" className="hover:text-foreground">Beauty</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">CUSTOMER POLICIES</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="hover:text-foreground">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Track Order</a></li>
              <li><a href="#" className="hover:text-foreground">Return Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Size Guide</a></li>
              <li><a href="#" className="hover:text-foreground">Customer Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">CONNECT WITH US</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Keep up to date with our latest offers
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Myntra Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
