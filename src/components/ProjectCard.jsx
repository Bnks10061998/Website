// import React, { useState } from 'react';

// export default function ProjectCard({ project }) {
//   const [showVideo, setShowVideo] = useState(false);

//   return (
//     <div style={{ width: '300px', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
//       <h3>{project.title}</h3>
//       <p>{project.description}</p>
//       {!showVideo ? (
//         <img
//           src={project.thumbnail}
//           alt={project.title}
//           style={{ width: '100%', borderRadius: '4px', cursor: 'pointer' }}
//           onClick={() => setShowVideo(true)}
//         />
//       ) : (
//         <video
//           src={project.video}
//           controls
//           autoPlay
//           style={{ width: '100%', borderRadius: '4px' }}
//           onEnded={() => setShowVideo(false)}
//         />
//       )}
//     </div>
//   );
// }


// import React from 'react';

// export default function ProjectCard({ project }) {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 duration-300">
//       <img
//         src={project.thumbnail}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//         <p className="text-gray-600 text-sm mt-1">{project.description}</p>
//         <video
//           src={project.video}
//           controls
//           className="mt-4 w-full rounded-lg"
//         />
//       </div>
//     </div>
//   );
// }



// import React from 'react';
// import { motion } from 'framer-motion';

// export default function ProjectCard({ project, onClick }) {
//   return (
//     <motion.div
//       onClick={onClick}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       className="cursor-pointer bg-white rounded-xl shadow-md overflow-hidden transition-transform"
//     >
//       <img
//         src={project.thumbnail}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//         loading="lazy"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
//         <p className="text-gray-600 text-sm mt-1">{project.description}</p>
//       </div>
//     </motion.div>
//   );
// }



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
