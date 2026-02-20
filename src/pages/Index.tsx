import { useState } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import { products, type Category } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Truck, ShieldCheck } from "lucide-react";

const categories: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "vegetables", label: "🥬 Vegetables" },
  { key: "fruits", label: "🍎 Fruits" },
  { key: "milk", label: "🥛 Milk" },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category | "all">("all");

  const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[480px] overflow-hidden">
        <img src={heroBanner} alt="Fresh organic produce" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/20" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card max-w-lg leading-tight">
            Fresh & Natural Everyday
          </h1>
          <p className="mt-4 text-card/80 text-lg max-w-md">
            Organic vegetables, fruits & dairy delivered from farm to your table.
          </p>
          <a
            href="#products"
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold w-fit hover:opacity-90 transition-opacity"
          >
            Shop Now <Leaf className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Trust badges */}
      <section className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Leaf, title: "100% Organic", desc: "No pesticides, no chemicals" },
            { icon: Truck, title: "Free Delivery", desc: "On orders above ₹299" },
            { icon: ShieldCheck, title: "Quality Assured", desc: "Farm-fresh guarantee" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-lg p-5 shadow-card flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="container mx-auto px-4 py-12">
        <h2 className="font-display text-3xl font-bold text-foreground text-center mb-2">Our Products</h2>
        <p className="text-muted-foreground text-center mb-8">Handpicked from organic farms</p>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
