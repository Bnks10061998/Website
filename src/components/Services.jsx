// import React from "react";
// import { motion } from "framer-motion";
// import {
//   FaFilm,
//   FaMagic,
//   FaPaintBrush,
//   FaRegImages,
//   FaPalette,
//   FaCubes,
//   FaObjectGroup,
//   FaVideo,
//   FaAd,
//   FaShapes,
//   FaRocket,
// } from "react-icons/fa";
// import { MdAnimation } from "react-icons/md";
// import { FaPenNib } from "react-icons/fa";


// export default function Services() {
//   const services = [
//     {
//       title: "Visual Effects (VFX) & Compositing",
//       icon: <FaFilm className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "2D & 3D Character Animation",
//       icon: <FaMagic className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Motion Design & Typography",
//       icon: <FaPaintBrush className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Storyboarding & Pre-visualization",
//       icon: <FaRegImages className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Post-production Editing & Color Grading",
//       icon: <FaPalette className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "3D Animation",
//       icon: <MdAnimation className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "3D Modeling",
//       icon: <FaCubes className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Logo Design",
//       icon: <FaPenNib className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Video Animation",
//       icon: <FaVideo className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Video Advertising",
//       icon: <FaAd className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Motion Graphics",
//       icon: <FaShapes className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//     {
//       title: "Rendering",
//       icon: <FaRocket className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
//     },
//   ];

//   return (
//     <motion.section
//       className="relative max-w-6xl mx-auto px-8 py-8 rounded-3xl shadow-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50 overflow-hidden"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       {/* Background Illustration */}
//       <svg
//         className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <circle cx="100" cy="100" r="100" fill="#6366f1" />
//       </svg>

//       <h2 className="text-5xl font-extrabold text-indigo-900 mb-4 text-center relative z-10">
//         Services
//       </h2>
//       <p className="text-center text-gray-600 text-lg mb-12 relative z-10">
//         Crafting cinematic visuals and immersive motion experiences.
//       </p>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto relative z-10">
//         {services.map((service, i) => (
//           <motion.div
//             key={i}
//             className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:bg-indigo-100 transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             {service.icon}
//             <p className="text-lg font-medium text-gray-800 leading-snug">
//               {service.title}
//             </p>
//           </motion.div>
//         ))}
//       </div>

//       {/* CTA Button */}
//       <div className="mt-16 flex justify-center relative z-10">
//         <a
//           href="/contact"
//           className="inline-block bg-indigo-600 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-colors duration-300"
//         >
//           Get a Quote / Contact Me
//         </a>
//       </div>
//     </motion.section>
//   );
// }


import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFilm,
  FaMagic,
  FaPaintBrush,
  FaRegImages,
  FaPalette,
  FaCubes,
  FaVideo,
  FaAd,
  FaShapes,
  FaRocket,
} from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";

const servicesData = [
  {
    title: "Visual Effects (VFX) & Compositing",
    icon: <FaFilm className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    tag: "Popular",
    category: "VFX",
    description:
      "High-quality VFX shots and compositing services to bring your visuals to life with seamless integration.",
  },
  {
    title: "2D & 3D Character Animation",
    icon: <FaMagic className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Animation",
    description:
      "Create engaging 2D and 3D character animations with smooth motion and vivid storytelling.",
  },
  {
    title: "Motion Design & Typography",
    icon: <FaPaintBrush className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Motion Design",
    description:
      "Dynamic motion graphics and typography to enhance your brand message with style and clarity.",
  },
  {
    title: "Storyboarding & Pre-visualization",
    icon: <FaRegImages className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Pre-Production",
    description:
      "Visualize your story in advance with detailed storyboards and pre-vis sequences.",
  },
  {
    title: "Post-production Editing & Color Grading",
    icon: <FaPalette className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Post-Production",
    description:
      "Professional editing and color grading services to polish your final video to perfection.",
  },
  {
    title: "3D Animation",
    icon: <MdAnimation className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    tag: "Hot",
    category: "Animation",
    description:
      "Create stunning 3D animations that bring concepts and characters to life.",
  },
  {
    title: "3D Modeling",
    icon: <FaCubes className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Modeling",
    description:
      "High-quality 3D models for films, games, and visualizations.",
  },
  {
    title: "Logo Design",
    icon: <FaPenNib className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Design",
    description:
      "Creative and memorable logo designs tailored to your brand identity.",
  },
  {
    title: "Video Animation",
    icon: <FaVideo className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Animation",
    description:
      "Engaging video animations to capture attention and convey your message effectively.",
  },
  {
    title: "Video Advertising",
    icon: <FaAd className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Advertising",
    description:
      "Craft compelling video ads designed to boost your marketing efforts.",
  },
  {
    title: "Motion Graphics",
    icon: <FaShapes className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Motion Design",
    description:
      "Creative motion graphics for promotional videos, presentations, and more.",
  },
  {
    title: "Rendering",
    icon: <FaRocket className="text-indigo-600 w-8 h-8 flex-shrink-0" />,
    category: "Post-Production",
    description:
      "Fast and high-quality rendering services for your 3D and animation projects.",
  },
];

// Extract unique categories from services data
const categories = [
  "All",
  ...Array.from(new Set(servicesData.map((s) => s.category))),
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  // Filter services by selected category
  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <motion.section
      className="relative max-w-7xl mx-auto px-6 sm:px-8 py-12 rounded-3xl shadow-2xl bg-gradient-to-r from-indigo-50 via-white to-indigo-50 overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Background Illustration */}
      {/* <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="100" cy="100" r="100" fill="#6366f1" />
      </svg> */}

      <h2 className="text-5xl font-extrabold text-indigo-900 mb-4 text-center relative z-10">
        Services
      </h2>
      <p className="text-center text-gray-600 text-lg mb-8 relative z-10">
        Crafting cinematic visuals and immersive motion experiences.
      </p>

      {/* Category Filter Tabs */}
      <div className="flex justify-center gap-4 mb-10 relative z-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-300 ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-indigo-100 text-indigo-700 hover:bg-indigo-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {filteredServices.map((service, i) => (
          <motion.div
            key={service.title}
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md cursor-pointer hover:shadow-xl hover:bg-indigo-100 transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedService(service)}
          >
            {service.icon}
            <div className="flex flex-col">
              <p className="text-lg font-medium text-gray-800 leading-snug flex items-center">
                {service.title}
                {service.tag && (
                  <span className="ml-2 text-xs font-semibold bg-yellow-300 text-black px-2 py-0.5 rounded-full">
                    {service.tag}
                  </span>
                )}
              </p>
            </div>
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

      {/* Modal for Service Details */}
      {selectedService && (
        <div
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            className="bg-white rounded-2xl max-w-lg w-full p-8 relative shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>
            <div className="flex items-center gap-4 mb-4">
              {selectedService.icon}
              <h3 className="text-2xl font-bold text-indigo-900">
                {selectedService.title}
              </h3>
              {selectedService.tag && (
                <span className="ml-auto text-xs font-semibold bg-yellow-300 text-black px-2 py-1 rounded-full self-start">
                  {selectedService.tag}
                </span>
              )}
            </div>
            <p className="text-gray-700 leading-relaxed">
              {selectedService.description}
            </p>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
