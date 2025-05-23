// import React from 'react';

// export default function Services() {
//   const services = [
//     "VFX Shots & Compositing",
//     "2D/3D Animation",
//     "Motion Graphics",
//     "Storyboarding & Animatics",
//     "Post-production & Color Grading",
//   ];

//   return (
//     <section>
//       <h2>Services</h2>
//       <ul>
//         {services.map((service, i) => (
//           <li key={i}>{service}</li>
//         ))}
//       </ul>
//     </section>
//   );
// }



import React from "react";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

export default function Services() {
  const services = [
    "VFX Shots & Compositing",
    "2D/3D Animation",
    "Motion Graphics",
    "Storyboarding & Animatics",
    "Post-production & Color Grading",
  ];

  return (
    <motion.section
      className="relative max-w-6xl mx-auto px-8 py-20 mt-16 rounded-3xl shadow-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background subtle illustration */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#6366f1" />
      </svg>

      <h2 className="text-5xl font-extrabold text-indigo-900 mb-12 text-center border-b-4 border-indigo-600 pb-4 relative z-10">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto relative z-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:bg-indigo-100 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HiCheckCircle className="text-indigo-600 w-8 h-8 flex-shrink-0" />
            <p className="text-lg font-medium text-gray-800">{service}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center relative z-10">
        <a
          href="/contact"
          className="inline-block bg-indigo-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-colors duration-300"
        >
          Get a Quote / Contact Me
        </a>
      </div>
    </motion.section>
  );
}
