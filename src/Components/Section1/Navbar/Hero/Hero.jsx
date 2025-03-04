import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container bg-[#FAFFFD]   md:mt-[0] sm:mt-0 lg:-mt-[0]">
      <div className="relative max-w-[90%] sm:max-w-[800px] md:mt-40 sm:mt-40 lg:mt-40 mt-10 mx-auto h-full  z-10 text-center flex flex-col justify-center  px-4">
        <h1  className="text-xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black leading-tight">
        “Empowering Enterprises with Scalable, Innovative Solutions for Growth” <br />
          
        </h1>
        <p className="mt-7 text-sm sm:text-base md:text-lg lg:text-sm text-gray-600 leading-relaxed">
        "We empower individuals and businesses with innovative, scalable solutions, fostering growth and unlocking potential. Our mission is to drive progress, inspire success, and support sustainable development for all."

        </p>
        <button className="w-[150px] sm:w-[200px] my-6 mx-auto text-white py-2 px-4 sm:px-6 md:px-8 bg-[#01B379] rounded-md shadow-md hover:bg-[#01b3786f] transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
