import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const services = [
    "Building Construction",
    "Real Estate Services",
    "Building Plan Design",
    "POP Ceiling Installation",
    "Painting Services",
    "Kitchen Cabinets",
    "Lighting Systems",
    "Renovation",
    "Interior Finishing",
    "Project Supervision",
  ];

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold">
                <span className="text-accent-foreground font-display font-bold text-xl">BC</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">BuildCraft</h3>
                <p className="text-xs text-primary-foreground/60 font-body">Construction & Design</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 font-body leading-relaxed mb-6">
              Your trusted partner for comprehensive construction and building services. 
              Building excellence since 2010.
            </p>
            <div className="space-y-3">
              <a href="https://wa.me/233240384380" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-body">+233 24 038 4380</span>
              </a>
              <a href="mailto:dasghlimited@gmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body">dasghlimited@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span className="font-body">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Services (split into two columns) */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">More Services</h4>
            <ul className="space-y-3">
              {services.slice(5).map((service) => (
                <li key={service}>
                  <a href="#services" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/70 hover:text-gold transition-colors font-body">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-center text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} BuildCraft Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
