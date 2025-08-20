import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = () => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    e.preventDefault();

    emailjs
      .send(
        "service_tb5274d", // 🔹 apna emailjs service id yahan dalna
        "template_37u331t", // 🔹 apna template id yahan dalna
        formData,
        "nSMpNhn8WyePY4xvi" // 🔹 apna public key yahan dalna
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-16">
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in <span className="text-blue-400">Touch</span>
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="text-gray-300">
            Feel free to reach out! Whether you have a question or just want to say hi,
            I’ll try my best to get back to you.
          </p>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span>youloos477@gmail.com</span>
            <span>maroof123@gmail.com</span>

          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-green-400 text-2xl" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <span>Karachi, Pakistan</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-3 rounded-lg font-bold shadow-lg"
          >
            Send Message
          </button>
          {status && <p className="text-center mt-4">{status}</p>}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
