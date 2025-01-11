"use client"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { services } from "@/data";
import HeaderText from "@/components/ui/HeaderText";

gsap.registerPlugin(ScrollTrigger);

const Grid = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid items
      gsap.from(".grid-item", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top center+=100",
        },
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={gridRef} className="py-20" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <HeaderText title="Our" highlight="Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid-item bg-gradient-to-b from-gray-900 to-gray-900 bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mb-6 mx-auto ">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <p className="text-white-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
