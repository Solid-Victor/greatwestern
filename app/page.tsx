"use client";

// import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";
// import Experience from "@/components/Experience";
// import RecentProjects from "@/components/RecentProjects";

import dynamic from "next/dynamic";
// Dynamically import all components with SSR disabled
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
});
// // const FloatingNav = dynamic(() => import("@/components/ui/FloatingNavbar"), { ssr: false });

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl w-full">
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
      </div>
    </>
  );
};

export default Home;
