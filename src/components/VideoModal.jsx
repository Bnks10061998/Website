import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal({ videoSrc, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <motion.div
          key="modal"
          className="bg-gray-900 rounded-lg shadow-xl max-w-3xl w-full mx-4 sm:mx-0 p-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <video
            src={videoSrc}
            controls
            autoPlay
            muted
            loop
            className="w-full rounded-md"
          />

          <button
            onClick={onClose}
            className="mt-4 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
            aria-label="Close video modal"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
