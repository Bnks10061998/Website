import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-xl overflow-hidden bg-white shadow-md"
      tabIndex={0} // focusable for keyboard users
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      role="button"
      aria-label={`Open video for ${project.title}`}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        loading="lazy"
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        <p className="mt-1 text-gray-600">{project.description}</p>
      </div>
    </motion.div>
  );
}
