


// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import video from "../assets/homevideo.mp4";
// import bgImage from "../assets/motionimage.jpg";

// const typedTexts = [
//   "VFX & Animation Designer passionate about crafting visual stories that captivate and inspire.",
//   "Bringing cinematic magic to every frame.",
//   "Transforming ideas into stunning visuals.",
// ];

// function TypedText({ texts, typingSpeed = 50, pause = 1500 }) {
//   const [displayedText, setDisplayedText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [deleting, setDeleting] = useState(false);

//   useEffect(() => {
//     let timeout;

//     if (!deleting && charIndex < texts[textIndex].length) {
//       timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
//         setCharIndex((prev) => prev + 1);
//       }, typingSpeed);
//     } else if (!deleting && charIndex === texts[textIndex].length) {
//       timeout = setTimeout(() => setDeleting(true), pause);
//     } else if (deleting && charIndex > 0) {
//       timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev.slice(0, -1));
//         setCharIndex((prev) => prev - 1);
//       }, typingSpeed / 2);
//     } else if (deleting && charIndex === 0) {
//       setDeleting(false);
//       setTextIndex((prev) => (prev + 1) % texts.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, deleting, pause, texts, textIndex, typingSpeed]);

//   return (
//     <p className="text-lg sm:text-xl ml-[-125px] mt-10 max-w-2xl min-h-[3rem] drop-shadow bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent font-medium">
//   {displayedText}
//   <span className="text-blue-400 font-semibold animate-blink">|</span>
// </p>
//   );
// }

// export default function Home() {
//   const particlesInit = async (main) => {
//     await loadFull(main);
//   };

//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   const toggleAudio = () => {
//     if (!audioRef.current) return;
//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <>
//       {/* Background Image */}
//       {/* <div
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100vw",
//           height: "100vh",
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           zIndex: -1000,
//           opacity: 0.9,
//           pointerEvents: "none",
//         }}
//       /> */}

//       {/* Particles */}
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         options={{
//           fullScreen: { enable: false },
//           background: { color: "transparent" },
//           particles: {
//             number: { value: 80 },
//             size: {
//               value: { min: 1, max: 4 },
//               animation: { enable: true, speed: 2, minimumValue: 1 },
//             },
//             color: { value: ["#ffffff", "#60a5fa", "#9333ea", "#14b8a6"] },
//             shape: { type: ["circle", "star"] },
//             opacity: {
//               value: 0.7,
//               random: true,
//               animation: {
//                 enable: true,
//                 speed: 1.5,
//                 minimumValue: 0.3,
//                 sync: false,
//               },
//             },
//             links: {
//               enable: true,
//               distance: 120,
//               color: "#93c5fd",
//               opacity: 0.4,
//               width: 1,
//             },
//             move: {
//               enable: true,
//               speed: 0.8,
//               direction: "none",
//               outModes: "out",
//             },
//           },
//           interactivity: {
//             events: {
//               onHover: { enable: true, mode: "repulse" },
//               onClick: { enable: true, mode: "push" },
//             },
//             modes: {
//               repulse: { distance: 100, duration: 0.4 },
//               push: { quantity: 4 },
//             },
//           },
//           detectRetina: true,
//         }}
//         className="absolute top-0 left-0 w-full h-full -z-10"
//       />

//       {/* Glow Background */}
//       <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
//       {/* Blue glow - moved to right */}
//       <div className="absolute w-[600px] h-[600px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse-slow top-[-150px] right-[-200px]" />

//       {/* Purple glow - can stay bottom right */}
//       <div className="absolute w-[450px] h-[450px] bg-purple-500 opacity-15 rounded-full blur-3xl animate-pulse-slower bottom-[-150px] right-[-150px]" />

//       {/* Pink glow - centered */}
//       <div className="absolute w-[350px] h-[350px] bg-pink-300 opacity-10 rounded-full blur-2xl animate-pulse-slower" />
//     </div>

//       {/* <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
//         <div className="absolute w-[600px] h-[600px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse-slow top-[-150px] left-[-200px]" />
//         <div className="absolute w-[450px] h-[450px] bg-purple-500 opacity-15 rounded-full blur-3xl animate-pulse-slower bottom-[-150px] right-[-150px]" />
//         <div className="absolute w-[350px] h-[350px] bg-pink-300 opacity-10 rounded-full blur-2xl animate-pulse-slower" />
//       </div> */}

//       {/* Main Content */}
//       <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-20 gap-10">
//         {/* Left Content */}
//         <motion.div
//           className="md:w-1/2 md:text-left"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl sm:text-5xl font-bold text-black drop-shadow ml-[-130px] whitespace-nowrap">
//             Hi, I'm <span className="text-[#38BDF8]">Sudhan</span>
//           </h1>

//           <TypedText texts={typedTexts} />

//           <Link
//             to="/portfolio"
//             className="inline-block mt-16 px-5 py-4 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
//           >
//             View Portfolio
//           </Link>
//         </motion.div>

//         {/* Right Video Content */}
//         <motion.div
//           className="flex justify-center items-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <video
//             src={video}
//             autoPlay
//             muted
//             loop
//             playsInline
//             className="ml-72 mt-[-100px] rounded-xl shadow-lg w-[1500px] h-[400px] object-cover"
//           />
//         </motion.div>
//       </section>

//       {/* Footer */}
//       <footer className="text-center text-white text-sm py-4 opacity-80">
//         © 2025 Sudhan — VFX & Animation Designer
//       </footer>
//     </>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import video from "../assets/homevideo.mp4";
import bgImage from "../assets/motionimage.jpg";

const typedTexts = [
  "VFX & Animation Designer passionate about crafting visual stories that captivate and inspire.",
  "Bringing cinematic magic to every frame.",
  "Transforming ideas into stunning visuals.",
];

function TypedText({ texts, typingSpeed = 50, pause = 1500 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (!deleting && charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      }, typingSpeed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, pause, texts, textIndex, typingSpeed]);

  return (
    <p className="text-lg sm:text-xl ml-[-125px] mt-10 max-w-2xl min-h-[3rem] drop-shadow bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-transparent font-medium">
      {displayedText}
      <span className="text-blue-400 font-semibold animate-blink">|</span>
    </p>
  );
}

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <>
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 80 },
            size: {
              value: { min: 1, max: 4 },
              animation: { enable: true, speed: 2, minimumValue: 1 },
            },
            color: { value: ["#ffffff", "#60a5fa", "#9333ea", "#14b8a6"] },
            shape: { type: ["circle", "star"] },
            opacity: {
              value: 0.7,
              random: true,
              animation: {
                enable: true,
                speed: 1.5,
                minimumValue: 0.3,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 120,
              color: "#93c5fd",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          detectRetina: true,
        }}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-20 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-cyan-400 opacity-20 rounded-full blur-3xl animate-pulse-slow top-[-150px] right-[-200px]" />
        <div className="absolute w-[450px] h-[450px] bg-purple-500 opacity-15 rounded-full blur-3xl animate-pulse-slower bottom-[-150px] right-[-150px]" />
        <div className="absolute w-[350px] h-[350px] bg-pink-300 opacity-10 rounded-full blur-2xl animate-pulse-slower" />
      </div>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-32 pb-20 gap-10">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-black drop-shadow ml-[-130px] whitespace-nowrap">
            Hi, I'm <span className="text-[#38BDF8]">Sudhan</span>
          </h1>

          <TypedText texts={typedTexts} />

          <Link
            to="/portfolio"
            className="inline-block mt-16 px-5 py-4 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-full transition duration-300"
          >
            View Portfolio
          </Link>
        </motion.div>

        {/* Right Video Content */}
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <video
            ref={videoRef}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            className="ml-72 mt-[-100px] rounded-xl shadow-lg w-[1500px] h-[400px] object-cover"
          />
          <button
            onClick={toggleVideo}
            className="mt-4 ml-80 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
          >
            {isVideoPlaying ? "Pause Video" : "Play Video"}
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white text-sm py-4 opacity-80">
        © 2025 Sudhan — VFX & Animation Designer
      </footer>
    </>
  );
}

