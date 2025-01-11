"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data";
import HeaderText from "@/components/ui/HeaderText";

gsap.registerPlugin(ScrollTrigger);

type Category = "All" | "Commercial" | "Residential" | "Infrastructure" | "Industrial";

const RecentProjects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const projectsRef = useRef(null);

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top center+=100",
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (  //bg-gradient-to-b from-gray-900 to-gray-900
    <section ref={projectsRef} className="bg-[rgba(17,24,39,1)] overflow-hidden py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <HeaderText title="Recent" highlight="Projects" />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-yellow-500 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-lg shadow-lg bg-[rgba(17,24,39,1)]"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-[rgba(17,24,39,0.95)] backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300">{project.description}</p>
                  <span className="inline-block mt-3 text-yellow-500 text-sm">
                    {project.category}
                  </span>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default RecentProjects;
