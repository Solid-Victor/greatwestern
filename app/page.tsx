"use client";

import dynamic from "next/dynamic";

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

const Home = () => {
  return (
    <>
      <Hero />
      <div className="max-w-7xl w-[100vw]">
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
