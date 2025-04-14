"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import './styles.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Mock submission
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 3000);
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen bg-white overflow-hidden"
    >
      <main className="absolute top-[100px] left-[100px] flex flex-col lg:flex-row gap-8 items-start z-10">
        {/* Contact Information Section */}
        <section className="w-full lg:w-1/2">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg mt-4">
              Need to get in touch with us? Either fill out the form with your inquiry or find the department phone, email you'd like to contact below
            </p>
          </motion.header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Location Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              className="contact-card relative bg-white p-6 rounded-xl shadow-md transition-colors duration-300 hover:bg-gray-100 cursor-pointer overflow-hidden"
            >
              <div className="flex flex-row items-center gap-4 mb-4">
                <MapPin className="text-black flex-shrink-0" size={32} />
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Location</h4>
                  <p className="text-gray-600">Bhimavaram, Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="w-full h-40 rounded-lg overflow-hidden">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.972265050994!2d81.521241!3d16.544893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37d2a6a86d3e4b%3A0x4eed21243d2dcfed!2sBhimavaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1698778900000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Combined Email and Phone Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              className="contact-card relative bg-white p-6 rounded-xl shadow-md transition-colors duration-300 hover:bg-gray-100 cursor-pointer overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {/* Email Section */}
                <div className="flex flex-row items-center gap-4">
                  <Mail className="text-black flex-shrink-0" size={32} />
                  <div className="flex-1 text-left">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Email</h4>
                    <p className="text-gray-600 mb-3">sujayss149@gmail.com</p>
                    <a
                      href="mailto:sujayss149@gmail.com"
                      className="text-black flex items-center hover:underline transition duration-300"
                      aria-label="Send email"
                    >
                      <FaEnvelope className="mr-2" size={16} /> Send Message
                    </a>
                  </div>
                </div>

                {/* Phone Section */}
                <div className="flex flex-row items-center gap-4">
                  <Phone className="text-black flex-shrink-0" size={32} />
                  <div className="flex-1 text-left">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Phone</h4>
                    <p className="text-gray-600 mb-3">+91 9346491221</p>
                    <a
                      href="tel:+919346491221"
                      className="text-black flex items-center hover:underline transition duration-300"
                      aria-label="Call"
                    >
                      <FaPhoneAlt className="mr-2" size={16} /> Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full lg:w-1/2">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.02 }}
            className="contact-card relative bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:bg-opacity-80 cursor-pointer overflow-hidden"
          >
            <h4 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h4>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
                aria-required="true"
              />
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                required
                aria-required="true"
              />
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical"
                required
                aria-required="true"
              ></textarea>
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className={cn(
                  "w-full py-3 rounded-lg text-white transition duration-300",
                  formStatus === "submitting" ? "bg-black cursor-not-allowed" : "bg-black hover:bg-gray-800"
                )}
                aria-label="Submit contact form"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
            <AnimatePresence>
              {formStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg"
                >
                  Message sent successfully!
                </motion.div>
              )}
              {formStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg"
                >
                  Failed to send message. Please try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>
    </motion.section>
  );
};

export default Contact;
