"use client";

import { useState } from 'react';
import { projects } from '@/data/index';
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import HeaderText from "@/components/ui/HeaderText";

type Category = "All" | "Commercial" | "Residential" | "Infrastructure" | "Industrial";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const categories: Category[] = [
    "All",
    "Commercial",
    "Residential",
    "Infrastructure",
    "Industrial",
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-[rgba(10,15,25,1)] pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <HeaderText title="Our" highlight="Projects" />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Discover our portfolio of successful construction and engineering projects
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl glass-effect"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-500 text-sm">
                    {project.category}
                  </span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 glass-effect rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-400 mb-8">
            Let&apos;s discuss how we can bring your vision to life
          </p>
          <Button>
            Contact Us
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
