import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-10 mt-16">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Leaf className="h-6 w-6" />
          <span className="font-display text-lg font-bold">OrganicStore</span>
        </div>
        <p className="text-sm opacity-80">Fresh & natural produce delivered to your doorstep every day.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm opacity-80">
          <li>About Us</li>
          <li>Contact</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-3">Contact</h4>
        <p className="text-sm opacity-80">hello@organicstore.com</p>
        <p className="text-sm opacity-80">+91 98765 43210</p>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-8 pt-6 border-t border-primary-foreground/20 text-center text-sm opacity-60">
      © 2026 OrganicStore. All rights reserved.
    </div>
  </footer>
);

export default Footer;
