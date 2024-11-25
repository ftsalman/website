import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container bg-white  mt-[24%] md:mt-[0] sm:mt-0 lg:-mt-[0]">
      <div className="relative max-w-[90%] sm:max-w-[800px] md:mt-40 sm:mt-40 lg:mt-40 mt-10 mx-auto h-full text-center flex flex-col justify-center px-4">
        <h1  className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-black leading-tight">
          Empowering Businesses with <br />
          Scalable, Innovative Software <br />
          Solutions
        </h1>
        <p className="mt-7 text-sm sm:text-base md:text-lg lg:text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a nunc
          vel dolor gravida scelerisque a sed risus. In laoreet tincidunt felis, ac
          dapibus justo aliquam id. Sed mattis ex sed arcu dapibus, vitae blandit
          nisi dictum.
        </p>
        <button className="w-[150px] sm:w-[200px] my-6 mx-auto text-white py-2 px-4 sm:px-6 md:px-8 bg-[#7C3AED] rounded-md shadow-md hover:bg-purple-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
