// import React from 'react';
// import img1 from '../public/images1.jpeg'


// const Item6 = () => {
//         const currentDate = new Date().toLocaleString(); // Get the current date and time
      
//         return (
//           <div className="min-h-[100vh] h-full bg-purple-100 flex flex-col p-4 mt-10">
//             <div className='flex justify-between items-center'>
//             <h2 className="text-2xl font-bold"> Heading</h2>
//             <div className="text-gray-600">{currentDate}</div>
//             </div>
           
//         <div className='flex h-3/4 w-3/4'>
//         <div className="w-10rem h-30vh bg-white p-4">
//         <h3 className="text-lg font-semibold mb-2">List of Items</h3>
//         <ul className="list-disc pl-4">
//           <li>Item 1</li>
//           <li>Item 2</li>
//           <li>Item 3</li>
          
//         </ul>
//       </div>


//       <div className="w-40 h-40">
//         <img
//           src={img1} 
//           alt="Your Image"
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Third div */}
//       <div className="flex flex-col w-10rem h-30vh bg-white p-4">
//         <h3 className="text-lg font-semibold mb-2">More Content</h3>
//         <p>
//           Add your content here. This div can contain additional text or other
//           elements.
//         </p>
//         <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
//           Button
//         </button>
//       </div>
//           </div>
      
//           </div>
//         );
//       };


// export default Item6;

import React from 'react';
import img1 from '../public/images1.png'

const Item6 = () => {
  const currentDate = new Date().toLocaleString(); // Get the current date and time

  return (
    <div className="w-full h-full">
      <div className="min-h-[100vh] h-full bg-purple-100 flex flex-col p-4 mt-10">
        <div className='flex justify-between items-center'>
        <h2 className="text-2xl font-bold"> Heading</h2>
        <div className="text-gray-600">{currentDate}</div>
        </div>

  <div className="min-h-[90vh]  bg-purple-100 flex flex-col md:flex-row justify-between items-center p-4 mt-10 ">
      {/* First div */}
      <div className="w-full  md:h-[60vh] md:w-1/3 bg-white px-4 py-10 mb-4 md:mb-0 m-8 
       rounded-lg shadow-lg  transition-transform transform hover:scale-105">
        <h3 className="text-lg font-semibold mb-2">List of Items</h3>
        <ul className="list-disc pl-4">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 3</li>
          <li>Item 3</li>
          {/* Add more items as needed */}
        </ul>
      </div>

      {/* Second div */}
      <div className="w-full md:w-2/3 h-60 md:h-full  rounded-lg shadow-lg  transition-transform transform hover:scale-105">
        <img
          src={img1} // Replace with your image URL
          alt="Your Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Third div */}
      <div className="w-full md:w-1/3 bg-white p-4 md:h-[60vh] m-8 py-10 mt-10  rounded-lg shadow-lg  transition-transform transform hover:scale-105">
        <h3 className="text-lg font-semibold mb-2">More Content</h3>
        <p>
          I dont know what to put here, so im gonna leave it like this sorry oga Lawal. This div can contain additional text or other
          elements.
        </p>
        <strong className=' bg-purple-500 block'>Dont know what to write</strong>
        <button className=" px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mt-[50%]">
          Button
        </button>
      </div>
    </div>

    </div>
   </div>
  );
};

export default Item6;

