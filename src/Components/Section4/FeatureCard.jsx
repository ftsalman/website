import React from 'react';

const FeatureCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col  items-center justify-center p-6 bg-white cursor-pointer hover:border duration-500 hover:border-[#7C5CFC] hover:rounded-lg max-w-xs mx-auto hover:shadow-xl transition-shadow  ease-in-out">
      {/* Icon */}
      <span className="text-4xl text-[#7C5CFC]">{img}</span>

      {/* Content */}
      <div className="mt-4 flex flex-col items-center">
        <h2 className="text-black font-bold text-lg sm:text-xl text-center">{title}</h2>
        <p className="text-[#374151] text-sm sm:text-base text-center mt-2">
          {description ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.'}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
