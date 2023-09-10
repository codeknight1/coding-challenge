import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Input = () => {
  return (
    <div className="flex md:hidden items-center m-auto space-x-2 rounded-lg p-2 px-4 w-[90%] bg-white">
      <FaSearch className="text-gray-300" />
      <input
        type="text"
        placeholder="Search"
        className="bg-white text-gray-400 focus:outline-none w-full"
      />
    </div>
  );
};

export default Input;
