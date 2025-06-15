import React from "react";
import { motion } from "framer-motion";
import profileimage from '../assets/sudhan.jpg';

export default function About() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-8 py-8 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">


      <motion.div
  className="w-full md:w-1/3 flex justify-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div className="p-1 rounded-full bg-yellow-500" style={{ backgroundColor: '#FFD700' }}>
    <img
      src={profileimage}
      alt="Profile"
      className="rounded-full shadow-lg border-4 border-white w-64 h-64 object-cover object-top"
    />
  </div>
   {/* Hover Overlay */}
    {/* <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
      <div className="text-center text-white">
        <h3 className="text-xl font-bold">John Doe</h3>
        <p className="text-sm">3D Artist & Designer</p>
      </div>
    </div> */}


    {/* <div className="absolute inset-0 rounded-full  bg-black/0 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
      <div className="text-center text-white pb-10 transform translate-y-2 hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-2xl font-bold drop-shadow-md text-yellow-300">Sudhan</h3>
        <p className="text-base text-gray-200">Animations & VFX </p>
      </div>
    </div> */}

    <div className="absolute inset-0 rounded-full bg-black/0 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
  <div className="text-center text-white pb-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
    <h3 className="text-2xl font-bold drop-shadow-md text-yellow-300">Sudhan</h3>
    <p className="text-base text-gray-200">Animations & VFX</p>
  </div>
</div>

  
</motion.div>


        {/* <motion.div
  className="w-full md:w-1/3 flex justify-center"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  <div className="p-1 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500">
    <img
      src={profileimage}
      alt="Profile"
      className="rounded-full shadow-lg border-4 border-white w-64 h-64 object-cover object-top"
    />
  </div>
</motion.div> */}

        
        {/* <motion.div
          className="w-full md:w-1/3 flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={profileimage}
            alt="Profile"
            className="rounded-full shadow-lg border-8 border-indigo-200 w-64 h-64 object-cover object-top"
          />
        </motion.div> */}

        {/* Right side - Text content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-5xl font-extrabold text-indigo-900 mb-8 border-b-4 border-indigo-600 pb-3">
            About Me
          </h2>

          <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-3xl">
            I'm a passionate <span className="font-semibold text-indigo-600">Animation & VFX designer</span> with expertise in After Effects, Maya, and more.
            I love bringing stories to life with stunning visuals, combining technical skill with creative vision to craft immersive experiences.
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl">
            {[
              "Skills: Photoshop, Premiere Pro, After Effects, Audition, Maya, Nuke, Figma",
              "Experience: Freelance creative professional with 2+ years of experience collaborating with short film productions, advertising agencies, and game developers on various projects including visual design, motion graphics, and interactive media.",
              // "Experience: 2+ years collaborating with film productions, advertising agencies, and game developers",
              "Projects: Delivered 10+ successful client projects across CGI, 3D modeling, Short Films, Logo Design, Brochures, Advertisements, and Menu Card Designs.",
              // "Awards & Certifications: [List your awards, certificates, or relevant achievements here]",
            ].map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05, color: "#4F46E5" }} // Indigo-600
                transition={{ type: "spring", stiffness: 300 }}
                className="cursor-pointer"
              >
                {item.split(": ")[0]}:{" "}
                <span className="font-semibold text-indigo-600">
                  {item.split(": ")[1]}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
