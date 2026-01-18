import { motion } from "framer-motion";
import { CheckCircle2, Shield, Award, Headphones } from "lucide-react";
import constructionImg from "@/assets/construction-3.jpeg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "We use only premium materials and proven construction techniques to ensure lasting results.",
    },
    {
      icon: Award,
      title: "Licensed & Insured",
      description: "Fully certified professionals with comprehensive insurance coverage for your peace of mind.",
    },
    {
      icon: CheckCircle2,
      title: "On-Time Delivery",
      description: "We respect your timeline and deliver projects on schedule without compromising quality.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our team is always available to address your concerns and provide project updates.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={constructionImg}
                alt="Foundation construction work"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-2xl shadow-gold">
              <div className="text-center">
                <span className="text-4xl font-display font-bold text-accent-foreground">14+</span>
                <p className="text-accent-foreground/80 text-sm font-body">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 font-body">
              About Our Company
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Building Trust Through{" "}
              <span className="text-gradient-gold">Quality Construction</span>
            </h2>
            <p className="text-muted-foreground font-body text-lg leading-relaxed mb-8">
              With over 14 years of experience in the construction industry, we have established 
              ourselves as a trusted partner for residential and commercial building projects. 
              Our commitment to excellence, transparent communication, and client satisfaction 
              has earned us a reputation for delivering outstanding results.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
