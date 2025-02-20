import React from "react";
import banner from "../assets/banner.jpg";
import Navbar from "./Navbar";
import Herobase from "./Herobase";

const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banner})` }}
    >
    
      <Navbar />

    
      <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center">
        <p className="text-white text-5xl font-bold">EXPLORE THE WORLD</p>
        <p className="text-white text-3xl font-bold">WITH THE VALLEY</p>
      </div>

      <div className="absolute bottom-15 left-20 w-full  px-10">
        <Herobase />
      </div>
    </section>
  );
};

export default Hero;

