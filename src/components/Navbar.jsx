import React from "react";
import LogoImg from "../assets/logo-light .png";

const Navbar = () => {
  return (
    <nav className="absolute w-full flex items-center justify-between px-8 py-4 bg-opacity-100 text-white  z-50">
      
      <img src={LogoImg} alt="Logo" className="h-10 ml-4" />

     
      <ul className="hidden md:flex space-x-6 text-lg">
        <li><a href="#home" className="hover:underline hover:decoration-red-500 underline-offset-8">Home</a></li>
        <li><a href="#destination" className="hover:underline hover:decoration-red-500 underline-offset-8">Destination</a></li>
        <li><a href="#tours" className="hover:underline hover:decoration-red-500 underline-offset-8">Tours</a></li>
        <li><a href="#activities" className="hover:underline hover:decoration-red-500 underline-offset-8">Activities</a></li>
        <li><a href="#about" className="hover:underline hover:decoration-red-500 underline-offset-8">About</a></li>
        <li><a href="#contact" className="hover:underline hover:decoration-red-500 underline-offset-8">Contact</a></li>
      </ul>

      <div className="flex space-x-4">
        <a href="#login" className="rounded-lg border border-blue-200 px-4 py-2 transition hover:bg-blue-200 hover:text-black">
          Login
        </a>
        <a href="#signup" className="bg-red-500 px-4 py-2 rounded-lg transition hover:bg-red-600">
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
