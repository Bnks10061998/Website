import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const cardWidth = 600; // Fixed width in px

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 relative bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-2xl shadow-2xl">
      <h2 className="text-5xl font-extrabold text-indigo-900 mb-10 text-center border-b-4 border-indigo-600 pb-4">
        Testimonials
      </h2>

      <div className="relative w-full flex justify-center items-center">
        {/* Card Slider */}
        <div
          className="w-full overflow-hidden"
          style={{ maxWidth: `${cardWidth}px` }}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * cardWidth}px)` }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="w-[600px] flex-shrink-0 bg-white rounded-xl shadow-lg p-6 border-l-8 border-indigo-600"
              >
                <blockquote className="text-gray-800 text-xl italic mb-4">
                  “{t.text}”
                </blockquote>
                <footer className="text-indigo-700 font-semibold text-right">
                  — {t.client}
                </footer>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-indigo-200 p-2 rounded-full shadow hover:bg-indigo-100 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-indigo-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-indigo-200 p-2 rounded-full shadow hover:bg-indigo-100 z-10"
        >
          <ChevronRight className="w-6 h-6 text-indigo-600" />
        </button>
      </div>

      {/* Dots */}
      {/* <div className="flex justify-center mt-6 space-x-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              i === index ? "bg-indigo-600 scale-110" : "bg-indigo-300 hover:bg-indigo-500"
            }`}
          />
        ))}
      </div> */}
    </section>
  );
}
