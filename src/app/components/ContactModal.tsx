"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS Public Key
      );

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose(); // Close modal after success
      }, 2000);
    } catch (error) {
      console.error("Email sending failed:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Slide-in Modal */}
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }} // Start from above
        animate={{ y: 0, opacity: 1 }} // Slide down into position
        exit={{ y: "-100vh", opacity: 0 }} // Slide up when closing
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-[#1A1A1A] p-6 rounded-lg shadow-lg max-w-lg w-full text-white relative"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        {/* Modal Header */}
        <h2 className="text-3xl font-bold mb-4">
          How can we help you?
          <span className="block w-24 h-1 bg-red-600 mt-1"></span>
        </h2>
        <p className="text-gray-400 mb-6">
          Please fill in the form below and we will get back to you shortly.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-1/2 p-2 border-b border-red-600 bg-transparent focus:outline-none"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-1/2 p-2 border-b border-red-600 bg-transparent focus:outline-none"
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full p-2 border-b border-red-600 bg-transparent focus:outline-none h-24"
            onChange={handleChange}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 border border-red-600 rounded-full text-white transition hover:bg-red-600"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "SEND →"}
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="text-green-500 mt-4 text-center">
            Message sent successfully!
          </p>
        )}
      </motion.div>
    </div>
  );
}
