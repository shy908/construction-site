import { motion } from "framer-motion";
import House from "../../assets/images/house.svg";
import Design from "../../assets/images/design.svg";
import Maintenance from "../../assets/images/maintenance.svg";

const Features = () => {
  const features = [
    {
      icon: House,
      title: "Renovations",
    },
    {
      icon: Design,
      title: "Painting",
    },
    {
      icon: Maintenance,
      title: "Waterproofing",
    },
    {
      icon: House,
      title: "Tiling",
    },
    {
      icon: Design,
      title: "Roof Cleaning and Painting",
    },
    {
      icon: Maintenance,
      title: "Drywall and Plasterboard Repairs",
    },
    {
      icon: House,
      title: "Demolition Services",
    },
  ];

  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between lg:mt-44 mt-20 lg:px-24 px-5 lg:gap-10 gap-12">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="flex flex-col items-center gap-5 lg:max-w-[200px] max-w-[95%]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: index * 0.2 },
          }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is visible
        >
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-[71px] mb-4"
          />
          <span className="text-primary font-Fira text-2xl font-bold text-center">
            {feature.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;
