import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Awareness from "../components/Awareness"; 
import OurServices from "@/components/Ourservice";
import Hello from "@/components/Hello";
import Connect from "@/components/Connect";

export default function Page() {
  return (
    <div>
    
      <Navbar />
      <Hero />
      <Awareness />
      <OurServices />
      <Hello />
      <Connect />
      {/* Otros contenidos o secciones */}
    </div>
  );
}
