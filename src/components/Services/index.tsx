import pavingImage from "../../assets/paving.jpeg";
import renovationImage from "../../assets/bulding2.jpg";
import paintingImage from "../../assets/plastering.jpg";
import waterproofingImage from "../../assets/waterproofing.jpg";
import tilingImage from "../../assets/tiling.jpeg";
import roofCleaningImage from "../../assets/roofing.jpg";
import drywallRepairsImage from "../../assets/wallrepair.jpg";
import demolitionImage from "../../assets/demolition.jpg";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full flex flex-col items-center justify-center gap-16 lg:mt-36 mt-10 lg:px-24 px-5 relative min-h-[80vh]"
    >
      <SectionHeader
        title="Our Services"
        description="Explore the wide range of construction services we provide to meet your needs."
      />

      {/* First Row */}
      <div className="flex lg:flex-row flex-col items-center justify-center gap-12 w-full">
        <ServiceCard
          image={renovationImage}
          title="Renovations"
          description="We provide full renovation services, transforming your space with quality craftsmanship and attention to detail."
        />
        <ServiceCard
          image={paintingImage}
          title="Painting"
          description="Our professional painting services bring fresh color and life to your property, with perfect finishes every time."
        />
        <ServiceCard
          image={waterproofingImage}
          title="Waterproofing"
          description="Protect your home and business with our expert waterproofing services, keeping your property dry and safe."
        />
      </div>

      {/* Second Row */}
<div className="flex lg:flex-row flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full mt-12">
        <ServiceCard
          image={pavingImage}
          title="Paving"
          description="We provide durable and attractive paving solutions for driveways, walkways, and outdoor spaces."
        />
        <ServiceCard
          image={tilingImage}
          title="Tiling"
          description="We offer expert tiling services for both floors and walls, creating stylish and durable surfaces for any space."
        />
        <ServiceCard
          image={roofCleaningImage}
          title="Roof Cleaning & Painting"
          description="We clean and repaint roofs to restore their condition, improve aesthetics, and prevent future damage."
        />
      </div>

      {/* Third Row */}
<div className="flex lg:flex-row flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full mt-12">
        <ServiceCard
          image={drywallRepairsImage}
          title="Drywall & Plasterboard Repairs"
          description="We offer drywall and plasterboard repairs, ensuring smooth and flawless finishes for your walls and ceilings."
        />
        <ServiceCard
          image={demolitionImage}
          title="Demolition Services"
          description="We handle all types of demolition services, ensuring safe and efficient removal of unwanted structures."
        />
      </div>

      <Button greenButton className="mt-10">
        Get in Touch
      </Button>
    </div>
  );
};

const ServiceCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="relative w-full sm:w-1/2 lg:w-1/3"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover rounded-xl shadow-lg"
      />
      <div className="text-center lg:text-left mt-4">
        <span className="font-Urbanist font-medium text-xl text-secondary">
          {title}
        </span>
        <p className="font-Urbanist text-lg text-articlesDesc mt-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Services;
