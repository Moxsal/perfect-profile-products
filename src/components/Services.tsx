import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

// Import images
import construction1 from "@/assets/construction-1.jpeg";
import construction2 from "@/assets/construction-2.jpeg";
import construction3 from "@/assets/construction-3.jpeg";
import popCeiling1 from "@/assets/pop-ceiling-1.jpeg";
import popCeiling2 from "@/assets/pop-ceiling-2.jpeg";
import lighting1 from "@/assets/lighting-1.jpeg";
import lighting2 from "@/assets/lighting-2.jpeg";

const Services = () => {
  const services = [
    {
      title: "Building Construction",
      description: "Complete residential and commercial building construction from foundation to roofing. We handle all structural work including block laying, reinforcement, decking, and roofing with precision engineering and quality materials that ensure durability for decades.",
      image: construction1,
      features: [
        "Foundation & structural design implementation",
        "Block work, pillars, and load-bearing walls",
        "Reinforced concrete decking & roofing",
        "Quality materials with warranty assurance",
      ],
    },
    {
      title: "Real Estate Services",
      description: "Comprehensive real estate solutions including property development, sales, and consultation. We help clients find, acquire, or develop properties that meet their investment goals with transparent pricing and professional documentation.",
      image: construction2,
      features: [
        "Land acquisition and title verification",
        "Property development consultation",
        "Investment-grade property sourcing",
        "Legal documentation support",
      ],
    },
    {
      title: "Building Plan Design",
      description: "Professional architectural design and building plan services tailored to your vision and budget. Our designs maximize space efficiency, natural lighting, and ventilation while ensuring full compliance with local building regulations.",
      image: construction3,
      features: [
        "Custom floor plans & 3D visualization",
        "Structural engineering drawings",
        "Building approval documentation",
        "Cost estimation & material scheduling",
      ],
    },
    {
      title: "POP Ceiling Installation",
      description: "Transform your interiors with stunning Plaster of Paris (POP) ceiling designs. From modern minimalist styles to elaborate decorative patterns, we create ceilings that enhance room aesthetics, improve acoustics, and add a touch of luxury to any space.",
      image: popCeiling1,
      features: [
        "Custom design patterns & moldings",
        "Integrated LED lighting channels",
        "Sound insulation properties",
        "Moisture-resistant finishing options",
      ],
    },
    {
      title: "Painting Services",
      description: "Professional interior and exterior painting services using premium paints and techniques. We ensure flawless surface preparation, precise color matching, and durable finishes that protect your walls while creating the perfect ambiance for every room.",
      image: popCeiling2,
      features: [
        "Interior & exterior wall painting",
        "Texture and decorative finishes",
        "Weatherproof exterior coatings",
        "Color consultation services",
      ],
    },
    {
      title: "Kitchen Cabinet Installation",
      description: "Custom kitchen cabinet design and installation that maximizes storage while enhancing your kitchen's aesthetic appeal. We work with quality woods and modern materials to create functional, durable cabinets tailored to your cooking lifestyle.",
      image: lighting2,
      features: [
        "Custom cabinet design & fitting",
        "Quality hardwood & modern materials",
        "Space optimization solutions",
        "Soft-close mechanisms & hardware",
      ],
    },
    {
      title: "Lighting Systems",
      description: "Complete lighting system design and installation for residential and commercial spaces. We integrate modern LED solutions, ambient lighting, and smart controls to create energy-efficient systems that enhance comfort and architectural features.",
      image: lighting2,
      features: [
        "LED & chandelier installations",
        "Ambient and task lighting design",
        "Energy-efficient solutions",
        "Smart lighting controls integration",
      ],
    },
    {
      title: "Renovation Services",
      description: "Comprehensive building renovation and remodeling services that breathe new life into existing structures. Whether upgrading outdated spaces or restoring damaged areas, we deliver transformations that exceed expectations while maintaining structural integrity.",
      image: construction1,
      features: [
        "Complete space transformation",
        "Structural repair & reinforcement",
        "Modern amenity upgrades",
        "Minimal disruption execution",
      ],
    },
    {
      title: "Interior Finishing",
      description: "Expert interior finishing services including wall screeding, POP work, tiling, and decorative elements. We pay meticulous attention to detail to ensure smooth surfaces, perfect edges, and finishes that showcase the true quality of your property.",
      image: popCeiling1,
      features: [
        "Wall screeding & plastering",
        "Floor & wall tiling installation",
        "Decorative moldings & cornices",
        "Final touch-ups & detailing",
      ],
    },
    {
      title: "Project Supervision",
      description: "Professional construction project management and supervision ensuring your project stays on schedule, within budget, and meets quality standards. Our experienced supervisors coordinate contractors, manage materials, and provide regular progress reports.",
      image: construction3,
      features: [
        "Daily site supervision & reporting",
        "Quality control & inspections",
        "Contractor coordination",
        "Budget & timeline management",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm font-semibold mb-4 font-body">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Comprehensive Building &{" "}
            <span className="text-gradient-gold">Construction Services</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg leading-relaxed">
            From initial concept to final handover, we provide end-to-end construction solutions 
            with uncompromising quality, transparent pricing, and professional project management.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
