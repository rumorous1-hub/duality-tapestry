import React from "react";
import ThreadBackground from "@/components/landing/ThreadBackground";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import ShatteredWorlds from "@/components/landing/ShatteredWorlds";
import TheCast from "@/components/landing/TheCast";
import Gameplay from "@/components/landing/Gameplay";
import DevStatus from "@/components/landing/DevStatus";
import Terms from "@/components/landing/Terms";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div id="top" className="relative min-h-screen">
      <ThreadBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="seam max-w-5xl mx-auto" />
        <ShatteredWorlds />
        <div className="seam max-w-5xl mx-auto" />
        <TheCast />
        <div className="seam max-w-5xl mx-auto" />
        <Gameplay />
        <div className="seam max-w-5xl mx-auto" />
        <DevStatus />
        <div className="seam max-w-5xl mx-auto" />
        <Terms />
        <Footer />
      </main>
    </div>
  );
}