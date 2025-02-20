import React from "react";
import banner from "../assets/banner.jpg";



const Hero = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${banner})` }}
    >
    
     

    
      <div className="relative inset-0   items-center grid-col-1 top-70 justify-center text-center">
        <h3 className="text-white text-5xl font-bold">EXPLORE THE WORLD</h3>
        <h3 className="text-white text-3xl font-bold">WITH THE VALLEY</h3>
      </div>
       
    </section>
  );
};

export default Hero;

