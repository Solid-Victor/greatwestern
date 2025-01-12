"use client"

// import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// const gsap = dynamic(() => import('gsap'), { ssr: false });
// const ScrollTrigger = dynamic(() => import('gsap/ScrollTrigger'), { ssr: false });
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const carouselData = [
  {
    title: "Building Tomorrow&apos;s",
    highlight: "Infrastructure",
    description: "Excellence in construction solutions for your most ambitious projects",
    video: "/construction-video.mp4",
    image: "/construction-img.jpeg"
  },
  {
    title: "Engineering",
    highlight: "Excellence",
    description: "Innovative engineering solutions driving progress and sustainability",
    video: "/engineering-video.mp4",
    image: "/engineering-img.jpg"
  }
];

const Hero = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const heroRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselData.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(overlayRef.current, {
        opacity: 0.8,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });
      
      gsap.from(".hero-description", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power4.out",
      });

      gsap.from(".hero-cta", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === activeIndex && video) {
        video.play();
        gsap.to(video, { opacity: 1, duration: 1 });
      } else if (video) {
        gsap.to(video, { opacity: 0, duration: 1 });
        setTimeout(() => {
          video.pause();
          video.currentTime = 0;
        }, 1000);
      }
    });
  }, [activeIndex]);

  const handleGetStarted = () => {
    router.push('/contact');
  };

  const handleProjects = () => {
    router.push('/projects');
  };

  return (
    <div className="relative h-screen w-[100vw] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/construction-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white mt-50">
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 ">
            {carouselData[activeIndex].title}{" "}
            <span className="text-yellow-500">
              {carouselData[activeIndex].highlight}
            </span>
          </h1>
          
          <p className="hero-description text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {carouselData[activeIndex].description}
          </p>
          
          <div className="hero-cta flex gap-4 justify-center mb-32">
            <Button onClick={handleGetStarted}>
              Get Started
            </Button>
            <Button variant="secondary" onClick={handleProjects}>
              Our Projects
            </Button>
          </div>

          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "bg-yellow-500 w-8"
                    : "bg-gray-400 hover:bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
