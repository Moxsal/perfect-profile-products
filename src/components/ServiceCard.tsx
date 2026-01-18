import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  images: string[];
  features: string[];
  index: number;
}

const ServiceCard = ({ title, description, images, features, index }: ServiceCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border"
    >
      {/* Image Gallery */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${title} - Project ${currentImageIndex + 1}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Navigation arrows - only show if multiple images */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? 'bg-gold w-4' 
                      : 'bg-background/60 hover:bg-background/80'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground font-body leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80 font-body">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button variant="outline-slate" className="w-full group/btn">
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
