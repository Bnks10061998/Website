// import React from 'react';

// export default function About() {
//   return (
//     <section>
//       <h2>About Me</h2>
//       <p>
//         I'm a passionate VFX & Animation designer with expertise in After Effects, Maya, Blender, and more.
//         I love bringing stories to life with stunning visuals.
//       </p>
//       <ul>
//         <li>Skills: After Effects, Nuke, Maya, Houdini, Blender</li>
//         <li>Experience: 5+ years working on films, ads, and games</li>
//         <li>Awards: [List awards/certifications]</li>
//       </ul>
//     </section>
//   );
// }



// import React from "react";

// export default function About() {
//   return (
//     <section className="max-w-4xl mx-auto px-6 py-12 mt-12 bg-white rounded-lg shadow-lg">
//       <h2 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-indigo-600 pb-2">
//         About Me
//       </h2>
//       <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//         I'm a passionate <span className="font-semibold text-indigo-600">VFX & Animation designer</span> with expertise in After Effects, Maya, Blender, and more.
//         I love bringing stories to life with stunning visuals.
//       </p>
//       <ul className="list-disc list-inside space-y-3 text-gray-700 text-base">
//         <li>
//           <span className="font-semibold text-indigo-600">Skills:</span> After Effects, Nuke, Maya, Houdini, Blender
//         </li>
//         <li>
//           <span className="font-semibold text-indigo-600">Experience:</span> 5+ years working on films, ads, and games
//         </li>
//         <li>
//           <span className="font-semibold text-indigo-600">Awards:</span> [List awards/certifications]
//         </li>
//       </ul>
//     </section>
//   );
// }



// import React from "react";
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <motion.section
//       className="max-w-6xl mx-auto px-8 py-16 mt-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-2xl shadow-2xl"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//     >
//       <div className="flex flex-col md:flex-row items-center gap-12">
//         {/* Left side - Image or illustration */}
//         <div className="w-full md:w-1/3 flex justify-center">
//           <img
//             src="/assets/profile-photo.jpg" // Replace with your actual photo path
//             alt="Profile"
//             className="rounded-full shadow-lg border-8 border-indigo-200 w-64 h-64 object-cover"
//           />
//         </div>

//         {/* Right side - Text content */}
//         <div className="w-full md:w-2/3">
//           <h2 className="text-5xl font-extrabold text-indigo-900 mb-8 border-b-4 border-indigo-600 pb-3">
//             About Me
//           </h2>

//           <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-3xl">
//             I'm a passionate <span className="font-semibold text-indigo-600">VFX & Animation designer</span> with expertise in After Effects, Maya, Blender, and more.
//             I love bringing stories to life with stunning visuals, combining technical skill with creative vision to craft immersive experiences.
//           </p>

//           <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl">
//             <li>
//               <span className="font-semibold text-indigo-600">Skills:</span> After Effects, Nuke, Maya, Houdini, Blender, Cinema 4D, Photoshop
//             </li>
//             <li>
//               <span className="font-semibold text-indigo-600">Experience:</span> 5+ years collaborating with film productions, advertising agencies, and game developers
//             </li>
//             <li>
//               <span className="font-semibold text-indigo-600">Awards & Certifications:</span> [List your awards, certificates, or relevant achievements here]
//             </li>
//           </ul>
//         </div>
//       </div>
//     </motion.section>
//   );
// }



import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-8 py-16 mt-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-2xl shadow-2xl"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left side - Image with hover scale */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src="/assets/profile-photo.jpg" // Replace with your actual photo path
            alt="Profile"
            className="rounded-full shadow-lg border-8 border-indigo-200 w-64 h-64 object-cover"
          />
        </motion.div>

        {/* Right side - Text content */}
        <div className="w-full md:w-2/3">
          <h2 className="text-5xl font-extrabold text-indigo-900 mb-8 border-b-4 border-indigo-600 pb-3">
            About Me
          </h2>

          <p className="text-xl text-gray-800 mb-8 leading-relaxed max-w-3xl">
            I'm a passionate <span className="font-semibold text-indigo-600">VFX & Animation designer</span> with expertise in After Effects, Maya, Blender, and more.
            I love bringing stories to life with stunning visuals, combining technical skill with creative vision to craft immersive experiences.
          </p>

          <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg max-w-3xl">
            {[
              "Skills: After Effects, Nuke, Maya, Houdini, Blender, Cinema 4D, Photoshop",
              "Experience: 5+ years collaborating with film productions, advertising agencies, and game developers",
              "Awards & Certifications: [List your awards, certificates, or relevant achievements here]",
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
