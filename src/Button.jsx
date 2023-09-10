import React from 'react';

const Button = ({ label, onClick }) => {
  return (
   <button  className="inline-block text-white text-sm sm:text-base px-8 py-[.4em] bg-yellow-600 rounded-full hover:shadow-md active:scale-90 duration-200">
    {label}
   </button>
  );
};

export default Button;



