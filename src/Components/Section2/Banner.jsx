import React from 'react';
import image1 from '../../assets/Img/communication.png';
import image2 from '../../assets/Img/computer.png';

const Banner = () => {
  return (
    <div className="w-[100%] sm:roum lg:w-[90%] sm:w-[90%] mx-8  md:w-[86%] py-14 mt-10 bg-white h-[360px]   ">
      <div className="p-9 grid md:grid-cols-2 gap-3">
        {/* Left Section */}
        <div className=' flex flex-col justify-center'>
          <h3 className="text-lg font-bold text-[#01B379] mb-6">Who We Are</h3>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          We stand by our values
          </h1>
          <p className="text-sm text-gray-600 mt-4">
          We are a dynamic organization driven by the values of Empower, Innovate, and Grow. Our mission is to empower individuals and businesses to achieve their highest potential, fostering progress through bold innovation and creative solutions. By aligning with our clients’ visions, we help transform ideas into action, ensuring sustainable growth and success. With a steadfast commitment to excellence, we create opportunities that inspire, innovate, and elevate. Together, we shape a future defined by possibilities and meaningful impact, standing firmly by the values that guide everything we do.

          </p>
        </div>

        {/* Right Section */}
        <div className="relative mt-[-30px]  flex items-center ">
          {/* Background Image */}
          <img
            className="w-40 hidden md:block  sm:hidden md:w-44 object-contain absolute left-[10%] top-[10%]"
            src={image1}
            alt="Background Illustration"
          />
          {/* Foreground Image */}
          <img
            className="w-40 sm:hidden hidden md:block md:w-44 object-contain relative z-10 left-[40%] top-[-20px]"
            src={image2}
            alt="Foreground Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
