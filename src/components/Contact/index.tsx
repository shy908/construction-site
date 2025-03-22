import { useState, ChangeEvent, FormEvent } from "react";
import SectionHeader from "../SectionHeader";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Replace with your Formspree form endpoint
      const response = await fetch("https://formspree.io/f/xyzkbonr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSent(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setErrorMessage("Message sending failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full flex flex-col items-center justify-center gap-16 lg:px-24 px-5 min-h-[80vh] mt-10 bg-gray-50">
      <SectionHeader title="Contact Us" description="Book us Now!" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-lg font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
              />
            </div>

            <div>
              <label htmlFor="phone" className="text-lg font-medium text-gray-700">Your Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-lg font-medium text-gray-700">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 mt-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {isSent && !isSubmitting && <div className="text-green-600 mt-4 text-center">Thank you! Your message has been sent.</div>}
            {errorMessage && <div className="text-red-600 mt-4 text-center">{errorMessage}</div>}
          </form>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Our Office</h3>
            <p className="text-gray-600 mt-2">Cape Town, South Africa</p>
            <p className="text-gray-600">Phone: +27 21 123 4567</p>
            <p className="text-gray-600">darwandalecontractors@gmail.com</p>
          </div>

          <div className="flex gap-6 text-3xl">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
