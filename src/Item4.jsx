import React from 'react';
import Image1 from "../public/f.png";
import Image2 from "../public/d.png";
import Image3 from "../public/g.png";
import Image4 from "../public/e.png";
import { motion as m } from 'framer-motion';

const Item4 = () => {
  return (
    <m.div className="flex flex-col items-center min-h-screen bg-purple-200 w-full max-w-[100vw] overflow-x-hidden">
      <div className="flex flex-col items-center text-center my-5 px-2 mb-10">
        <h4 className='font-bold text-black'>Lorem Ipsum</h4>
        <h2 className='font-bold text-2xl md:text-4xl'>Mollit anim</h2>
      </div>

      <m.div className="grid md:grid-cols-4 grid-rows grid-flow-row gap-4 w-full mx-4 md:ml-[25%] mt-20 p-4">
        <m.div
          className="flex flex-col items-start justify-start bg-white md:row-span-4 p-4 rounded-lg shadow-md "
          whileHover={{ scale: 1.05 }} 
        >
          <h2 className="font-bold">Lorem Ipsum Mollit</h2>
          <p className='text-gray-600'>lorem ipsum is a freaking 1</p>
          <button className="inline-block text-gray-500 text-sm sm:text-base border-2 px-8 py-[.4em] bg-transparent border-gray-400 rounded-full hover:shadow-md active:scale-90 duration-200">
            Read more
          </button>
          <img src={Image1} alt="Image" className="w-[80%] md:max-w-[100rem]" />
        </m.div>

        <m.div
          className="flex flex-col items-start justify-start bg-white md:row-span-2 md:col-span-1 p-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }} 
        >
          <h2 className="font-bold">Lorem Ipsum Mollit</h2>
          <p className='text-gray-600'>lorem ipsum is a freaking 1</p>
          <button className="inline-block text-gray-500 text-sm sm:text-base border-2 px-8 py-[.4em] bg-transparent border-gray-400 rounded-full hover:shadow-md active:scale-90 duration-200">
            Read more
          </button>
          <img src={Image2} alt="Image" className="w-[80%] md:max-w-[100rem]" />
        </m.div>


        <m.div
          className="flex flex-col items-start justify-start bg-white md:row-span-2 md:col-span-1 p-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }} 
        >
          <h2 className="font-bold">Lorem Ipsum Mollit</h2>
          <p className='text-gray-600'>lorem ipsum is a freaking 1</p>
          <button className="inline-block text-gray-500 text-sm sm:text-base border-2 px-8 py-[.4em] bg-transparent border-gray-400 rounded-full hover:shadow-md active:scale-90 duration-200">
            Read more
          </button>
          <img src={Image3} alt="Image" className="w-[80%] md:max-w-[100rem]" />
        </m.div>

        <m.div
          className="flex flex-col items-start justify-start bg-white md:row-span-1 md:col-span-2 p-4 rounded-lg shadow-md"
          whileHover={{ scale: 1.05 }} 
        >
          <h2 className="font-bold">Lorem Ipsum Mollit</h2>
          <p className='text-gray-600'>lorem ipsum is a freaking 1</p>
          <button className="inline-block text-gray-500 text-sm sm:text-base border-2 px-8 py-[.4em] bg-transparent border-gray-400 rounded-full hover:shadow-md active:scale-90 duration-200">
            Read more
          </button>
          <img src={Image4} alt="Image" className="w-[60%] md:max-w-[100rem]" />
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Item4;



