import { Link } from "react-scroll";
import aboutImage from "../../assets/heroimg.jpg";
import aboutVideo from "../../assets/images/aboutVideo.png";
import Button from "../Button";
import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="w-full flex flex-col items-center justify-center gap-16 lg:mt-36 mt-10 lg:px-24 px-5 relative min-h-[80vh]">
      <SectionHeader
        title="About Us"
        description="Discover more about Darwandale Contractors and our commitment to excellence in construction."
      />
      <div className="flex lg:flex-row flex-col items-center justify-center lg:h-[70vh] h-auto w-full gap-8">
        
        <motion.div
          className="relative w-full lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={aboutImage}
            alt="Darwandale Contractors team"
            className="w-full h-auto object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:w-1/2 lg:pl-8">
          <motion.img
            src={aboutVideo}
            alt="Darwandale Contractors at work"
            className="w-full rounded-xl shadow-lg mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.span
            className="font-Urbanist font-medium text-xl text-secondary mt-4 lg:mt-12"
            initial={{ opacity: 0, x: -50 }} // Starts from the left
            whileInView={{ opacity: 1, x: 0 }} // Moves to the normal position
            transition={{ duration: 1 }}
          >
            Leading Construction Services for Your Home and Business
          </motion.span>
          <motion.span
            className="font-Urbanist text-lg text-articlesDesc mt-3 lg:mt-5"
            initial={{ opacity: 0, y: 50 }} // Starts from the bottom
            whileInView={{ opacity: 1, y: 0 }} // Moves to the normal position
            transition={{ duration: 1 }}
          >
            At Darwandale Contractors, we specialize in delivering high-quality construction services, including renovations, painting, waterproofing, tiling, roof cleaning & painting, drywall & plasterboard repairs, and demolition services. 
            Whatever your construction needs are, we provide reliable and top-quality solutions tailored to meet your specific requirements. We pride ourselves on delivering exceptional results, ensuring that each project is completed to the highest standards.
          </motion.span>
          <Link to="contact" smooth={true} spy={true}>
            <Button greenButton className="mt-4 px-6 py-3 text-xl">Get in touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
