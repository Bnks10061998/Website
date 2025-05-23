import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    client: "John Doe, Film Director",
    text: "Amazing VFX work delivered on time. Highly recommended!",
  },
  {
    client: "Jane Smith, Agency Producer",
    text: "Creative and professional animation services. A pleasure to work with.",
  },
  {
    client: "Mike Johnson, Indie Filmmaker",
    text: "Top-notch animation and VFX with great communication throughout.",
  },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);

  const paginate = (newDirection) => {
    setPage(([currentPage]) => {
      let nextPage = currentPage + newDirection;
      if (nextPage < 0) nextPage = testimonials.length - 1;
      else if (nextPage >= testimonials.length) nextPage = 0;
      return [nextPage, newDirection];
    });
  };

  // Jump directly to a specific testimonial (dots)
  const goToPage = (index) => {
    if (index === page) return;
    const newDirection = index > page ? 1 : -1;
    setPage([index, newDirection]);
  };

  const testimonial = testimonials[page];

  return (
    <section className="max-w-4xl mx-auto px-8 py-20">
      <h2 className="text-5xl font-extrabold text-indigo-900 mb-12 text-center border-b-4 border-indigo-600 pb-4">
        Testimonials
      </h2>

      <div className="relative bg-white rounded-xl shadow-lg p-10 border-l-8 border-indigo-600 min-h-[180px] flex flex-col justify-center">
        <AnimatePresence custom={direction} initial={false}>
          <motion.blockquote
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="text-gray-800 text-xl italic mb-6"
          >
            “{testimonial.text}”
            <footer className="text-indigo-700 font-semibold text-right mt-4">
              — {testimonial.client}
            </footer>
          </motion.blockquote>
        </AnimatePresence>

        <div className="absolute bottom-6 right-6 flex space-x-4">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
            className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 shadow-lg transition"
          >
            ‹
          </button>
          <button
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
            className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 shadow-lg transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 space-x-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToPage(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
            className={`w-4 h-4 rounded-full transition-colors ${
              idx === page ? "bg-indigo-600" : "bg-indigo-300 hover:bg-indigo-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
