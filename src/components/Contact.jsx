import React, { useState } from "react";
import { motion } from "framer-motion";
import { db, addDoc, collection } from "../firebase/firebase";
import toast from "react-hot-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });
      toast.success(`Thanks ${formData.name}, message sent!`);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again later.");
    }
  };

  return (
    <motion.section
      className="max-w-3xl mx-auto px-8 py-8 mt-0 rounded-3xl shadow-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-5xl font-extrabold text-indigo-900 mb-12 text-center border-b-4 border-indigo-600 pb-4">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        <motion.div className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Your full name"
          />
        </motion.div>

        <motion.div className="flex flex-col">
          <label htmlFor="email" className="mb-2 font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="your.email@example.com"
          />
        </motion.div>

        <motion.div className="flex flex-col">
          <label htmlFor="message" className="mb-2 font-semibold text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="rounded-md border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Write your message here..."
          />
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-indigo-600 text-white py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
}
