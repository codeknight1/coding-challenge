import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import computerImage3 from "../public/1.png"; 
import Button from "./Button";
import Input2 from './Input';


const Hero = () => {
  return (
    
    <div className="hero-carousel-container w-full h-[100vh] relative   bg-gradient-to-r from-primary to-secondary">
          <Input2 />
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="w-full h-full">


<div className="h-[90vh] flex">
      <div className="flex items-center justify-center flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-3/5">
          <img src={computerImage3} alt="Image" className="max-w-full w-full md:w-[80%]" />
        </div>
        <div className="w-full md:w-2/5 p-4 text-start md:mb-0 mb-10">
          <p className="text-white text-xl md:text-2xl mb-4">Lorem ipsum dolor</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Ut Labore et <br />dolore</h1>
          <Button label="Click me" />
        </div>
      </div>
    </div>       
     

    <div className="h-[90vh] flex">
      <div className="flex items-center justify-center flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-3/5">
          <img src={computerImage3} alt="Image" className="max-w-full w-full md:w-[80%]" />
        </div>
        <div className="w-full md:w-2/5 p-4 text-start md:mb-0 mb-10">
          <p className="text-white text-xl md:text-2xl mb-4">Lorem ipsum dolor</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Ut Labore et <br />dolore</h1>
          <Button label="Click me" />
        </div>
      </div>
    </div>

    <div className="h-[90vh] flex">
      <div className="flex items-center justify-center flex-col-reverse md:flex-row w-full">
        <div className="w-full md:w-3/5">
          <img src={computerImage3} alt="Image" className="max-w-full w-full md:w-[80%]" />
        </div>
        <div className="w-full md:w-2/5 p-4 text-start md:mb-0 mb-10">
          <p className="text-white text-xl md:text-2xl mb-4">Lorem ipsum dolor</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Ut Labore et <br />dolore</h1>
          <Button label="Click me" />
        </div>
      </div>
    </div>

     

   



      
      </Carousel>
    </div>
  );
};

export default Hero;
