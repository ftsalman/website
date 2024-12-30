import React from 'react';
import image from '../../assets/Img/join.png';

const Team = () => {
  return (
    <div className="relative p-14 mt-16 md:mt-9 shadow-sm bg-white w-full">
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center gap-8 p-6 md:p-12 text-center">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">Join Our Team</h1>
          <p className="mt-4 text-sm md:text-lg text-gray-600">
            Help us on our quest to make a good Software even better.
          </p>
        </div>

        {/* Button */}
        <button className= "py-3 mt-6 z-50 px-8 bg-[#6004F5] text-white font-semibold rounded-lg shadow-lg hover:bg-purple-800 transition duration-300">
          Join Now
        </button>

        {/* Image Section */}
        <div className="w-full max-w-2xl mt-[-34%] md:mt-[-20%]">
          <img
            className="w-full h-auto object-contain"
            src={image}
            alt="Join Our Team"
          />
        </div>
      </div>
    </div>
  );
};

export default Team;
