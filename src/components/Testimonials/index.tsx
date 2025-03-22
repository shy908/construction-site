import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";

// Sample Testimonial Data
const testimonials = [
	{
	  name: "John Peters",
	  role: "Homeowner, Sea View Residence",
	  testimonial: "The renovation team did an excellent job with the tiling and painting in my home. My living room looks completely transformed, and the quality of work was top-notch.",
	  image: "https://media.istockphoto.com/id/1156778226/photo/african-business-man-checking-in-to-a-hotel.jpg?s=2048x2048&w=is&k=20&c=zKZlVtlchDSzP9jCAoUh4TajDd1jql7Vfud9E-EaiaQ=", 
	},
	{
	  name: "Alice Brown",
	  role: "Homeowner, Green Hills Estate",
	  testimonial: "I couldn't be happier with the painting and tiling services. My kitchen looks brand new, and the work was done efficiently and professionally. Highly recommend!",
	  image: "https://images.pexels.com/photos/5239710/pexels-photo-5239710.jpeg?auto=compress&cs=tinysrgb&w=600", 
	},
	{
	  name: "David Wilson",
	  role: "Business Owner, Wilson's Café",
	  testimonial: "We had our café renovated with new tiles and a fresh coat of paint. The entire space feels rejuvenated. The team did an amazing job, and the results are simply stunning.",
	  image: "https://images.pexels.com/photos/1197132/pexels-photo-1197132.jpeg?auto=compress&cs=tinysrgb&w=600", 
	},
  ];
  

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="w-full flex flex-col items-center justify-center gap-16 lg:px-24 px-5 min-h-[80vh]  mt-10"
    >
      <SectionHeader
        title="What Our Clients Say"
        description="Here’s what some of our clients have to say about our work."
      />

      <div className="flex flex-col lg:flex-row gap-12 w-full justify-center">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 bg-white rounded-xl shadow-lg p-6 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
            />
            <p className="text-lg text-gray-700 italic mb-4">{testimonial.testimonial}</p>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
