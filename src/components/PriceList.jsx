import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, Film, Sparkles, Cpu, Video } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import bgVideo from '../assets/Backgroundvideo.mp4';

// Services with icons assigned per category
const allServices = [
  {
    category: 'VFX',
    icon: <Sparkles size={20} />,
    service: 'Basic Compositing',
    price: '₹1,000 – ₹3,000 per shot',
    priceMin: 1000,
    details: 'Green screen, cleanup, basic layering.',
  },
  {
    category: 'VFX',
    icon: <Sparkles size={20} />,
    service: 'Rotoscoping',
    price: '₹500 – ₹2,000 per shot',
    priceMin: 500,
    details: 'Manual mask creation frame by frame.',
  },
  {
    category: 'VFX',
    icon: <Sparkles size={20} />,
    service: 'Motion Tracking',
    price: '₹1,500 – ₹4,000 per shot',
    priceMin: 1500,
    details: '2D/3D camera tracking for object placement.',
  },
  {
    category: 'VFX',
    icon: <Sparkles size={20} />,
    service: 'Matchmoving',
    price: '₹2,000 – ₹5,000 per shot',
    priceMin: 2000,
    details: 'Integrating 3D elements with live footage.',
  },
  {
    category: 'Animation',
    icon: <Film size={20} />,
    service: '2D Animation (Explainer)',
    price: '₹8,000 – ₹25,000 per minute',
    priceMin: 8000,
    details: 'Script-based animations with voiceover options.',
  },
  {
    category: 'Animation',
    icon: <Film size={20} />,
    service: 'Logo Animation',
    price: '₹1,500 – ₹5,000 per logo',
    priceMin: 1500,
    details: 'Brand-focused motion graphics intro/outro.',
  },
  {
    category: 'Animation',
    icon: <Film size={20} />,
    service: '3D Product Animation',
    price: '₹10,000 – ₹30,000 per model',
    priceMin: 10000,
    details: 'Modeling, texturing, and animating products.',
  },
  {
    category: 'Animation',
    icon: <Film size={20} />,
    service: 'Character Animation (2D)',
    price: '₹15,000 – ₹40,000 per minute',
    priceMin: 15000,
    details: 'Custom characters rigged and animated frame-by-frame.',
  },
  {
    category: 'Animation',
    icon: <Film size={20} />,
    service: 'Whiteboard Animation',
    price: '₹5,000 – ₹15,000 per minute',
    priceMin: 5000,
    details: 'Hand-drawn styled storytelling.',
  },
  {
    category: 'Motion Graphics',
    icon: <Cpu size={20} />,
    service: 'Infographics Animation',
    price: '₹7,000 – ₹20,000 per minute',
    priceMin: 7000,
    details: 'Data-driven animated visuals.',
  },
  {
    category: 'Video Editing',
    icon: <Video size={20} />,
    service: 'Basic Video Editing',
    price: '₹2,000 – ₹10,000 per project',
    priceMin: 2000,
    details: 'Cutting, transitions, basic effects.',
  },
];

const categories = Array.from(new Set(allServices.map(s => s.category)));

const PriceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCategory = (category) => {
    const newSet = new Set(selectedCategories);
    if (newSet.has(category)) {
      newSet.delete(category);
    } else {
      newSet.add(category);
    }
    setSelectedCategories(newSet);
  };

  let filteredServices = allServices.filter(service => {
    const matchesSearch = service.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.size === 0 || selectedCategories.has(service.category);
    return matchesSearch && matchesCategory;
  });

  filteredServices = filteredServices.sort((a, b) =>
    sortOrder === 'asc' ? a.priceMin - b.priceMin : b.priceMin - a.priceMin
  );

  const exportCSV = () => {
    const data = filteredServices.map(({ category, service, price, details }) => ({
      Category: category,
      Service: service,
      Price: price,
      Details: details,
    }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Services');
    const buf = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([buf], { type: 'application/octet-stream' });
    saveAs(blob, 'VFX_Animation_Services.xlsx');
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('VFX & Animation Services', 14, 22);
    autoTable(doc, {
      startY: 30,
      head: [['Service', 'Category', 'Price', 'Details']],
      body: filteredServices.map(item => [
        item.service,
        item.category,
        item.price,
        item.details,
      ]),
    });
    doc.save('VFX_Animation_Services.pdf');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="text-4xl font-bold text-center mb-8 text-white">VFX & Animation Services</h1>

      {/* Search and Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 flex-1">
          <Search className="text-gray-400" />
          <Input
            placeholder="Search services..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>

        <select
          className="border rounded px-3 py-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          aria-label="Sort by price"
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {categories.map(category => {
          const icon = allServices.find(s => s.category === category)?.icon;
          return (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              aria-pressed={selectedCategories.has(category)}
              className={`flex items-center gap-1 border px-4 py-2 rounded-full cursor-pointer
                ${
                  selectedCategories.has(category)
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                }`}
            >
              {icon}
              {category}
            </button>
          );
        })}
        {selectedCategories.size > 0 && (
          <button
            onClick={() => setSelectedCategories(new Set())}
            className="ml-2 px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600"
          >
            Clear Filters
          </button>
        )}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredServices.map(item => (
            <motion.div
              key={item.service}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="border p-5 rounded-2xl shadow-lg bg-white cursor-pointer hover:shadow-2xl transition"
              onClick={() => {
                setSelectedService(item);
                setIsModalOpen(true);
              }}
            >
              <div className="flex items-center gap-2 mb-2 text-blue-600">
                {item.icon}
                <h2 className="text-xl font-semibold">{item.service}</h2>
              </div>
              <p className="text-sm text-gray-600 mb-1">{item.category} Service</p>
              <p className="font-medium text-green-700">{item.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredServices.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No services match your search or filters.
          </p>
        )}
      </div>

      {/* Export Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <Button onClick={exportCSV} variant="secondary">
          Export CSV
        </Button>
        <Button onClick={exportPDF} variant="primary">
          Export PDF
        </Button>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white max-w-md w-full rounded-xl p-6 shadow-xl">
            <Dialog.Title className="text-2xl font-semibold mb-3">
              {selectedService?.service}
            </Dialog.Title>
            <p className="text-sm text-gray-500 mb-2">
              Category: {selectedService?.category}
            </p>
            <p className="font-medium text-green-600 mb-4">Price: {selectedService?.price}</p>
            <p className="text-gray-700">{selectedService?.details}</p>
            <div className="text-right mt-6">
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Close
              </Button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PriceList;
