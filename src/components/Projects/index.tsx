import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import project1 from '../../assets/project1.jpg';
import project2 from '../../assets/project2.jpg';
import project3 from '../../assets/project3.jpg';
import project4 from '../../assets/project4.jpg';
import project5 from '../../assets/project5.jpg';
import project6 from '../../assets/project6.jpg';
import project7 from '../../assets/project7.jpg';
import project8 from '../../assets/project8.jpg';
import project9 from '../../assets/project9.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Elegant Home Painting and Renovation",
      image: project1,
    },
    {
      title: "Luxury Roof Cleaning & Painting",
      image: project2,
    },
    {
      title: "Cape Town Home Tiling and Renovation",
      image: project3,
    },
    {
      title: "Modern Home Construction",
      image: project4,
    },
    {
      title: "Professional Roofing Services",
      image: project5,
    },
    {
      title: "Custom Woodworking and Furnishing",
      image: project6,
    },
    {
      title: "Deck Restoration",
      image: project7,
    },
    {
      title: "Luxury Apartment Renovation",
      image: project8,
    },
    {
      title: "Roofing Homes",
      image: project9,
    },
  ];

  return (
    <div id="projects" className="w-full flex flex-col items-center justify-center gap-16 lg:mt-36 mt-10 lg:px-24 px-5 min-h-[80vh]">
      <SectionHeader
        title="Latest Projects"
        description="Explore our works"
      />

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:min-h-[70vh] mb-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover rounded-xl shadow-lg"
            />
            <span className="text-secondary font-Fira font-medium text-xl">
              {project.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
