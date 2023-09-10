import React from 'react';
import Image1 from "../public/3.png";
import Image2 from "../public/4.png";
import Image3 from "../public/5.png";
import Image4 from "../public/6.png";

const Item3 = () => {
  return (
    <div className="flex flex-col md:h-[90vh] bg-white overflow-x-hidden">
      <div className="flex flex-col items-center text-center my-5 px-2 mb-10">
        <h4 className='font-bold text-black'>Lorem Ipsum</h4>
        <h2 className='font-bold text-2xl md:text-4xl'>Unde Omnis Iste</h2>
        <p className='text-gray-600'>
          Lorem Ipsum is a freaking son of a bitch trying to get, playing hard to get, but I know how to get him, Bastard.
        </p>
      </div>

      <div className=" h-full grid w-full grid-cols-1 gap-5 md:grid-cols-4 md:h-screen p-2">
        <div className='flex flex-col items-center gap-4 p-4'>
          <img src={Image1} alt="Image" className="w-[100%] max-w-full md:max-w-[200rem]" />
          <p className='text-gray-600'>
            Tablet small <br />
            Tablet small <br />
            Tablet small <br />
            Tablet small
          </p>
          <a href='#' className='text-blue-500 hover:underline'>Tablet</a>
        </div>
        <div className='flex flex-col items-center gap-4 p-4'>
          <img src={Image2} alt="Image"  className="w-1/4 max-w-full md:max-w-[200rem]"/>
          <p className='text-gray-600'>
            Tablet small <br />
            Tablet small <br />
            Tablet small <br />
            Tablet small
          </p>
          <a href='#' className='text-blue-500 hover:underline'>Tablet</a>
        </div>
        <div className='flex flex-col items-center gap-4 p-4'>
          <img src={Image3} alt="Image" className="w-[40%] max-w-full md:max-w-[200rem]" />
          <p className='text-gray-600'>
            Tablet small <br />
            Tablet small <br />
            Tablet small <br />
            Tablet small
          </p>
          <a href='#' className='text-blue-500 hover:underline'>Tablet</a>
        </div>
        <div className='flex flex-col items-center gap-4 p-4'>
          <img src={Image4} alt="Image" className="w-[65%] max-w-full md:max-w-[200rem]" />
          <p className='text-gray-600'>
            Tablet small <br />
            Tablet small <br />
            Tablet small <br />
            Tablet small
          </p>
          <a href='#' className='text-blue-500 hover:underline'>Tablet</a>
        </div>
      </div>
    </div>
  );
};

export default Item3;
