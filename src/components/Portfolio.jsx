import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";
import video from '../assets/homevideo.mp4';
import image from '../assets/environment.jpg';

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "VFX shot for sci-fi short film",
    category: "VFX",
    thumbnail: image,
    video: video,
  },
  {
    id: 2,
    title: "Project Two",
    description: "2D animation explainer video",
    category: "Animation",
    thumbnail: image,
    video: video,
  },
  {
    id: 3,
    title: "Project Three",
    description: "Motion graphics for advertisement",
    category: "Motion Graphics",
    thumbnail: image,
    video: video,
  },
  {
    id: 4,
    title: "Project Four",
    description: "VFX shot for sci-fi short film",
    category: "VFX",
    thumbnail: image,
    video: video,
  },
  {
    id: 5,
    title: "Project Five",
    description: "2D animation explainer video",
    category: "Animation",
    thumbnail: image,
    video: video,
  },
  {
    id: 6,
    title: "Project Six",
    description: "Motion graphics for advertisement",
    category: "Motion Graphics",
    thumbnail: image,
    video: video,
  },
];

// Unique categories for filtering
const categories = ["All", ...new Set(projects.map((p) => p.category))];

const PROJECTS_PER_PAGE = 6;

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const openModal = (video) => setSelectedVideo(video);
  const closeModal = () => setSelectedVideo(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Filter & Search logic
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    if (filterCategory !== "All") {
      filtered = filtered.filter((p) => p.category === filterCategory);
    }
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  }, [filterCategory, searchTerm]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Reset page on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, searchTerm]);

  return (
    // <section className="min-h-screen bg-gray-50 px-6 py-16">
    <section className="max-w-6xl mx-auto px-8 py-8 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-2xl shadow-2xl">

      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-900 mb-6">My Work</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore my portfolio of VFX, animation, and motion graphics projects.
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search projects"
          />

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full sm:w-1/4 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Project Grid */}
        {paginatedProjects.length > 0 ? (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => openModal(project.video)}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No projects found matching your criteria.</p>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Pagination"
            className="mt-12 flex justify-center space-x-3"
          >
            {[...Array(totalPages)].map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium border ${
                    page === currentPage
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                  }`}
                  aria-current={page === currentPage ? "page" : undefined}
                  aria-label={`Go to page ${page}`}
                >
                  {page}
                </button>
              );
            })}
          </nav>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <VideoModal videoSrc={selectedVideo} onClose={closeModal} />
      )}
    </section>
  );
}
