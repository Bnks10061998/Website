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
  "Transforming ideas into stunning visuals."
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
    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl min-h-[3rem]">
      {displayedText}
      <span className="text-blue-600 font-semibold animate-blink">|</span>
    </p>
  );
}

export default function Home() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Background Image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1000,
          opacity: 0.9,
          pointerEvents: "none"
        }}
      />

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
        <div className="absolute w-[600px] h-[600px] bg-blue-400 opacity-30 rounded-full blur-3xl animate-pulse-slow top-[-200px] left-[-200px]"></div>
        <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-25 rounded-full blur-3xl animate-pulse-slower bottom-[-200px] right-[-150px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-pink-400 opacity-20 rounded-full blur-2xl animate-pulse-slower2 top-[20%] left-[60%]"></div>
      </div>

      {/* Foreground Content */}
      {/* <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 py-10 md:py-20 max-w-7xl mx-auto z-10 w-full"> */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 px-4 pt-4 md:pt-5 max-w-7xl mx-auto z-10 w-full">

        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Hi, I'm <span className="text-blue-600">Sudhan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <TypedText texts={typedTexts} />
          </motion.div>

          <motion.div
            className="pt-4 flex justify-center md:justify-start space-x-6 items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Link
              to="/portfolio"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Right Video Section */}
        <motion.div
          className="w-full md:w-2/4 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <video
            src={video}
            controls
            autoPlay
            muted={!isPlaying}
            loop
            // className="w-[600px] h-[450px] object-cover"
            className="w-[1100px] h-[500px] object-cover rounded-xl shadow-2xl"
           
          />
        </motion.div>
      </div>
    </>
  );
}