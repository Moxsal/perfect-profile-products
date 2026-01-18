import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ title, description, image, features, index }: ServiceCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 border border-border"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
