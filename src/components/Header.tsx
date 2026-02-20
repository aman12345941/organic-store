import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Leaf, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const Header = () => {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">OrganicStore</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/checkout" className="text-foreground hover:text-primary transition-colors">Orders</Link>
          <Link to="/login" className="text-foreground hover:text-primary transition-colors">Login</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/checkout")}
            className="relative p-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ShoppingCart className="h-5 w-5 text-foreground" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold">
                {totalItems}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-card px-4 py-3 flex flex-col gap-3 animate-fade-in">
          <Link to="/" className="text-foreground hover:text-primary py-1" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/checkout" className="text-foreground hover:text-primary py-1" onClick={() => setMobileOpen(false)}>Orders</Link>
          <Link to="/login" className="text-foreground hover:text-primary py-1" onClick={() => setMobileOpen(false)}>Login</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
