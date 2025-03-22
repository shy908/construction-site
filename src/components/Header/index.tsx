import { motion } from "framer-motion"; // Import framer-motion
import Navbar from "../Navbar/index";
import Button from "../Button";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section id="home" className="relative w-full bg-white sm:pt-[80px]">
      <Navbar />
      <div className="flex w-full lg:flex-row flex-col-reverse items-center justify-between lg:mt-36 mt-5 lg:px-24 px-5 lg:gap-0 gap-8">
        
        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-primary font-Fira text-5xl lg:text-6xl lg:max-w-[600px] max-w-[95%] font-extrabold">
            Leading Construction Services for Your Home and Business
          </span>
          <p className="text-lg font-Urbanist text-gray-600 lg:max-w-[600px] max-w-[95%]">
            We specialize in renovations, painting, waterproofing, tiling, roof cleaning & painting, drywall & plasterboard repairs, and demolition services.
            Whatever your construction needs are, we provide reliable, top-quality solutions tailored to you.
          </p>
          <Link to="services" smooth={true} spy={true}>
            <Button greenButton className="mt-4 px-6 py-3 text-xl">View Our Services</Button>
          </Link>
        </motion.div>

        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src="https://media.istockphoto.com/id/2118273462/photo/worker-doing-roof-repair-with-safety.jpg?b=1&s=612x612&w=0&k=20&c=R0eKX6pP5W7O0kb9rfHFwSXN-Fx65PUYXRX7BSjrn5s="
            alt="Construction worker repairing roof with safety equipment, performing roof repairs"
            className="w-full h-auto object-cover rounded-xl shadow-2xl max-w-full max-h-[400px]"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Header;
