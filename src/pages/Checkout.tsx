import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { items, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: "", phone: "", address: "", payment: "cod" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return toast.error("Your cart is empty");
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) {
      return toast.error("Please fill all fields");
    }
    setSubmitted(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto animate-fade-in">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="font-display text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
            <p className="text-muted-foreground mb-6">Your fresh produce is on its way.</p>
            <Link to="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Continue Shopping
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="font-display text-3xl font-bold text-foreground mb-8">Checkout</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/" className="text-primary font-medium hover:underline">Browse Products</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-3 space-y-4">
              <h2 className="font-semibold text-foreground text-lg mb-4">Order Summary</h2>
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-4 bg-card rounded-lg p-4 shadow-card">
                  <img src={product.image} alt={product.name} className="w-16 h-16 rounded-md object-cover" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground text-sm truncate">{product.name}</h3>
                    <p className="text-xs text-muted-foreground">₹{product.price}/{product.unit}</p>
                  </div>
                  <div className="flex items-center gap-1 border border-border rounded-md">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1 hover:bg-secondary transition-colors">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="px-2 text-sm font-medium">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1 hover:bg-secondary transition-colors">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <span className="text-sm font-semibold text-foreground w-16 text-right">₹{product.price * quantity}</span>
                  <button onClick={() => removeFromCart(product.id)} className="p-1 text-destructive hover:bg-destructive/10 rounded transition-colors">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}

              <div className="flex justify-between items-center pt-4 border-t border-border">
                <span className="font-semibold text-foreground">Total</span>
                <span className="text-xl font-bold text-primary">₹{totalPrice}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-2 bg-card rounded-lg p-6 shadow-card h-fit space-y-4">
              <h2 className="font-semibold text-foreground text-lg">Delivery Details</h2>
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Phone Number", key: "phone", type: "tel" },
              ].map(({ label, key, type }) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-foreground mb-1">{label}</label>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    required
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                <textarea
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  rows={3}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Payment</label>
                <div className="flex gap-3">
                  {[
                    { value: "cod", label: "Cash on Delivery" },
                    { value: "upi", label: "UPI" },
                  ].map(({ value, label }) => (
                    <label key={value} className={`flex-1 text-center px-3 py-2 rounded-md border text-sm font-medium cursor-pointer transition-all ${
                      form.payment === value ? "border-primary bg-primary/5 text-primary" : "border-input text-muted-foreground hover:border-primary/50"
                    }`}>
                      <input type="radio" name="payment" value={value} checked={form.payment === value} onChange={(e) => setForm({ ...form, payment: e.target.value })} className="sr-only" />
                      {label}
                    </label>
                  ))}
                </div>
              </div>
              <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Place Order — ₹{totalPrice}
              </button>
            </form>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
