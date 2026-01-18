import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+234XXXXXXXXX" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+234 XXX XXX XXXX</span>
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@example.com</span>
            </a>
          </div>
          <span className="text-gold-light font-medium">Building Excellence Since 2010</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold">
            <span className="text-accent-foreground font-display font-bold text-xl">BC</span>
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-foreground">BuildCraft</h1>
            <p className="text-xs text-muted-foreground font-body">Construction & Design</p>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-foreground hover:text-gold transition-colors font-medium font-body"
            >
              {link.label}
            </a>
          ))}
          <Button variant="gold" size="lg">
            Get Free Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-gold transition-colors font-medium py-2 font-body"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="gold" size="lg" className="mt-4">
                Get Free Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
