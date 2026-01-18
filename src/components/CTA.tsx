import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import popCeilingImg from "@/assets/pop-ceiling-2.jpeg";

const CTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={popCeilingImg}
          alt="Premium POP ceiling design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your{" "}
            <span className="text-gradient-gold">Building Project?</span>
          </h2>
          <p className="text-lg text-primary-foreground/80 font-body mb-8 leading-relaxed">
            Get in touch with our team today for a free consultation and quote. 
            We'll help you turn your vision into reality with professional service 
            and unmatched craftsmanship.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gold" size="xl" className="group">
              Request Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-gold" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
