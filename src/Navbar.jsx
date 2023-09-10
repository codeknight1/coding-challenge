import React from "react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white p-5 md:p-4 flex items-center justify-between h-10vh ">
      
      <div className="flex items-center space-x-2 px-4">
        <h1 className="text-lg font-semibold">RELAP</h1>
      </div>

      
      <div className=" items-center space-x-2 bg-white rounded-lg p-2 px-4 w-[35%] hidden md:flex">
        <FaSearch className="text-gray-300" />
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-white focus:outline-none w-full"
        />
      </div>

      
      <ul className="hidden md:flex space-x-4">
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>

     
      <div className="flex space-x-2 px-4">
        <a href="#" className="text-white border border-white rounded-full p-1">
          <FaFacebook />
        </a>
        <a href="#" className="text-white border border-white rounded-full p-1">
          <FaTwitter />
        </a>
        <a href="#" className="text-white border border-white rounded-full p-1">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;











