// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Portfolio from './components/Portfolio';
// import About from './components/About';
// import Services from './components/Services';
// import Testimonials from './components/Testimonials';
// import Contact from './components/Contact';
// import PriceList from './components/PriceList';
// import { Toaster } from "react-hot-toast";

// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <main className="max-w-5xl mx-auto px-4 py-8">
//         <Toaster position="top-center" />
//         <Routes>
//           <Route path="/" element={
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
//               <Home />
//             </motion.div>
//           } />
//           <Route path="/portfolio" element={
//             <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//               <Portfolio />
//             </motion.div>
//           } />
//           <Route path="/about" element={
//             <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//               <About />
//             </motion.div>
//           } />
//           <Route path="/services" element={
//             <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
//               <Services />
//             </motion.div>
//           } />
//           <Route path="/testimonials" element={
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
//               <Testimonials />
//             </motion.div>
//           } />
//           <Route path="/pricelist" element={
//             <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
//               <PriceList />
//             </motion.div>
//           } />
//           <Route path="/contact" element={
//             <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
//               <Contact />
//             </motion.div>
//           } />
//            <Toaster position="top-center" />
//         </Routes>
//       </main>
//       <Footer />
//     </Router>
//   );
// }




import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import PriceList from './components/PriceList';
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* ✅ Toast outside of Routes */}
        <Toaster position="top-center" />
        
        <Routes>
          <Route path="/" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <Home />
            </motion.div>
          } />
          <Route path="/portfolio" element={
            <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <Portfolio />
            </motion.div>
          } />
          <Route path="/about" element={
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <About />
            </motion.div>
          } />
          <Route path="/services" element={
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }}>
              <Services />
            </motion.div>
          } />
          <Route path="/testimonials" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <Testimonials />
            </motion.div>
          } />
          <Route path="/pricelist" element={
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <PriceList />
            </motion.div>
          } />
          <Route path="/contact" element={
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <Contact />
            </motion.div>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
