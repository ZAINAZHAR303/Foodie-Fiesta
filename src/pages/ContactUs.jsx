import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ContactUs() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeInOut' },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us!');
  };

  return (
    <>
    <Navbar />
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="text-lg text-gray-600 mb-10">
        Have questions, suggestions, or feedback? We'd love to hear from you!
      </p>
      <motion.form
        className="w-full max-w-lg  p-6 rounded-lg neumorphic"
        onSubmit={handleSubmit}
      >
        <motion.div className="mb-4" variants={inputVariants}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            type="text"
            id="name"
            placeholder="Your Name"
            required
          />
        </motion.div>

        <motion.div className="mb-4" variants={inputVariants}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            type="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </motion.div>

        <motion.div className="mb-4" variants={inputVariants}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            id="message"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </motion.div>

        <motion.button
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          type="submit"
          variants={inputVariants}
        >
          Send Message
        </motion.button>
      </motion.form>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <p className="text-gray-700">
          Or reach us directly at:
        </p>
        <p className="text-blue-500 font-bold">contact@recipeshare.com</p>
      </motion.div>
    </motion.section>
    <Footer />
    </>
  );
}

export default ContactUs;
