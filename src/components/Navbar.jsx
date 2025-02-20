import React from "react";
import LogoImg from "../assets/logo-light .png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-8 py-4  bg-opacity-70 text-white z-50">
   
      <img src={LogoImg} alt="Logo" className="h-10 ml-4" />

      <ul className="hidden md:flex space-x-6 text-lg">
        {["Home", "Destination", "Tours", "Activities", "About", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="hover:underline hover:decoration-red-500 underline-offset-8">
              {item}
            </a>
          </li>
        ))}
      </ul>


      <div className="flex space-x-4">
        <a href="#login" className="rounded-lg border border-blue-200 px-4 py-2 transition duration-300 hover:bg-blue-200 hover:text-black">
          Login
        </a>
        <a href="#signup" className="bg-red-500 px-4 py-2 rounded-lg transition duration-300 hover:bg-red-600">
          Signup
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
