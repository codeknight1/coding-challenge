import React, { useState } from 'react';
import Slider from 'react-slick'; 
import Image1 from "../public/5.png";
import { ChevronLeft, ChevronRight } from 'react-feather';

const Item5 = ({ imageUrl, title, description }) => {
  const [likes, setLikes] = useState(0);

  const handleLike1 = () => {
    setLikes(likes + 1);
  };
  


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
        {
          breakpoint: 1024, 
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, 
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1,
          },
        },
      ],
    arrows: false, 
    prevArrow: <div className="slick-prev"><ChevronLeft /></div>, 
    nextArrow: <div className="slick-next"><ChevronRight /></div>, 
  };

  return (
    <Slider {...sliderSettings}>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative flex 
      
      ">
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <img src={Image1} alt={title} className="w-full h-auto rounded-lg" />
          <h4 className="text-xl font-semibold mt-4">Blue Card</h4>
          <p className="text-gray-600 mt-2">Blue card is the main card</p>
          <div className="flex items-center justify-between space-x-2 mt-2">
            <button className={`text-red-500 ${likes > 0 ? 'text-red-600' : ''}`} onClick={handleLike1}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 3a6 6 0 0112 0c0 2.519-.374 4-1 4-2.5 0-3-4-5-4S9.5 7 7 7c-.626 0-1-1.481-1-4z"
                />
              </svg>
            </button>
            <span className="text-gray-600">{likes} Likes</span>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative flex">
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <img src={Image1} alt={title} className="w-full h-auto rounded-lg" />
          <h4 className="text-xl font-semibold mt-4">Blue Card</h4>
          <p className="text-gray-600 mt-2">Blue card is the main card</p>
          <div className="flex items-center justify-between space-x-2 mt-2">
          <button className={`text-red-500 ${likes > 0 ? 'text-red-600' : ''}`} onClick={handleLike1}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-6 cursor-pointer transform rotate-180" 
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 3a6 6 0 0112 0c0 2.519-.374 4-1 4-2.5 0-3-4-5-4S9.5 7 7 7c-.626 0-1-1.481-1-4z"
    />
  </svg>
</button>
            <span className="text-gray-600">{likes} Likes</span>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative flex">
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <img src={Image1} alt={title} className="w-full h-auto rounded-lg" />
          <h4 className="text-xl font-semibold mt-4">Blue Card</h4>
          <p className="text-gray-600 mt-2">Blue card is the main card</p>
          <div className="flex items-center justify-between space-x-2 mt-2">
          <button className={`text-red-500 ${likes > 0 ? 'text-red-600' : ''}`} onClick={handleLike1}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-6 cursor-pointer transform rotate-180" 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 3a6 6 0 0112 0c0 2.519-.374 4-1 4-2.5 0-3-4-5-4S9.5 7 7 7c-.626 0-1-1.481-1-4z"
    />
  </svg>
</button>

            <span className="text-gray-600">{likes} Likes</span>
          </div>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative flex">
        <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105">
          <img src={Image1} alt={title} className="w-full h-auto rounded-lg" />
          <h4 className="text-xl font-semibold mt-4">Blue Card</h4>
          <p className="text-gray-600 mt-2">Blue card is the main card</p>
          <div className="flex items-center justify-between space-x-2 mt-2">
          <button className={`text-red-500 ${likes > 0 ? 'text-red-600' : ''}`} onClick={handleLike1}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-6 cursor-pointer transform rotate-180" 
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 3a6 6 0 0112 0c0 2.519-.374 4-1 4-2.5 0-3-4-5-4S9.5 7 7 7c-.626 0-1-1.481-1-4z"
    />
  </svg>
</button>
            <span className="text-gray-600">{likes} Likes</span>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Item5;
