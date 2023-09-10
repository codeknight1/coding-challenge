import React from "react";
import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white p-5 md:p-4 flex items-center justify-between h-10vh ">
      {/* Logo */}
      <div className="flex items-center space-x-2 px-4">
        <h1 className="text-lg font-semibold">RELAP</h1>
      </div>

      {/* Search Bar */}
      <div className=" items-center space-x-2 bg-white rounded-lg p-2 px-4 w-[35%] hidden md:flex">
        <FaSearch className="text-gray-300" />
        <input
          type="text"
          placeholder="Search"
          className="bg-white text-white focus:outline-none w-full"
        />
      </div>

      {/* Navigation Links */}
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

      {/* Social Icons */}
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











// import React from "react";
// import { FaSearch, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-900 text-white p-2 md:p-4 flex flex-col md:flex-row items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center space-x-2 mb-2 md:mb-0">
//         <img
//           src="your-logo.png"
//           alt="Logo"
//           className="h-10 w-auto"
//         />
//         <h1 className="text-lg font-semibold">Your Brand</h1>
//       </div>

//       {/* Navigation Links - Hidden on mobile and tablet */}
//       <ul className="hidden md:flex space-x-4">
//         <li>
//           <a href="#" className="text-white hover:text-gray-300">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#" className="text-white hover:text-gray-300">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="#" className="text-white hover:text-gray-300">
//             Services
//           </a>
//         </li>
//         <li>
//           <a href="#" className="text-white hover:text-gray-300">
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/* Search Bar */}
//       <div className="flex items-center space-x-2 bg-white bg-opacity-10 rounded-lg p-2 px-4 mb-2 md:mb-0">
//         <FaSearch className="text-gray-300" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-transparent text-white focus:outline-none w-full"
//         />
//       </div>

//       {/* Social Icons */}
//       <div className="flex space-x-2">
//         <a href="#" className="text-white border border-white rounded-full p-1">
//           <FaFacebook />
//         </a>
//         <a href="#" className="text-white border border-white rounded-full p-1">
//           <FaTwitter />
//         </a>
//         <a href="#" className="text-white border border-white rounded-full p-1">
//           <FaInstagram />
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
