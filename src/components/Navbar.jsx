// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/portfolio">Portfolio</Link></li>
//         <li><Link to="/about">About Me</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/testimonials">Testimonials</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Lucide icons (install with `npm install lucide-react`)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">VFX Designer</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-600" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/portfolio" className="hover:text-blue-600" onClick={closeMenu}>Portfolio</Link></li>
          <li><Link to="/about" className="hover:text-blue-600" onClick={closeMenu}>About Me</Link></li>
          <li><Link to="/services" className="hover:text-blue-600" onClick={closeMenu}>Services</Link></li>
           <li><Link to="/pricelist" onClick={closeMenu} className="block hover:text-blue-600">Pricing</Link></li>
          <li><Link to="/testimonials" className="hover:text-blue-600" onClick={closeMenu}>Testimonials</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600" onClick={closeMenu}>Contact</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-gray-700 font-medium">
            <li><Link to="/" onClick={closeMenu} className="block hover:text-blue-600">Home</Link></li>
            <li><Link to="/portfolio" onClick={closeMenu} className="block hover:text-blue-600">Portfolio</Link></li>
            <li><Link to="/about" onClick={closeMenu} className="block hover:text-blue-600">About Me</Link></li>
            <li><Link to="/services" onClick={closeMenu} className="block hover:text-blue-600">Services</Link></li>
            <li><Link to="/pricelist" onClick={closeMenu} className="block hover:text-blue-600">Pricing</Link></li>
            <li><Link to="/testimonials" onClick={closeMenu} className="block hover:text-blue-600">Testimonials</Link></li>
            <li><Link to="/contact" onClick={closeMenu} className="block hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
