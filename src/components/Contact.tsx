import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Lagos, Nigeria", "Serving all regions"],
    },
    {
      icon: Phone,
      title: "WhatsApp",
      details: ["+233 24 038 4380"],
      link: "https://wa.me/233240384380",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@example.com", "projects@example.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 font-body">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Let's Build{" "}
            <span className="text-gradient-gold">Something Great Together</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Have a project in mind? Contact us for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => {
              const content = (
                <div
                  className={`flex gap-4 p-4 bg-card rounded-xl border border-border ${item.link ? 'hover:border-gold/50 cursor-pointer transition-colors' : ''}`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h4>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-muted-foreground font-body">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
              
              return item.link ? (
                <a key={item.title} href={item.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form className="bg-card p-8 rounded-2xl shadow-card border border-border">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Full Name
                  </label>
                  <Input placeholder="Your name" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2 font-body">
                    Phone Number
                  </label>
                  <Input placeholder="Your phone" className="h-12" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  Email Address
                </label>
                <Input placeholder="Your email" type="email" className="h-12" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  Service Needed
                </label>
                <Input placeholder="e.g., Building Construction, POP Ceiling" className="h-12" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2 font-body">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project..." 
                  className="min-h-[120px] resize-none"
                />
              </div>
              <Button variant="gold" size="xl" className="w-full group">
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
